import React from 'react';
import { withRouter, hashHistory } from 'react-router';
import BoardUsersIndexItem from './board_users_index_item';
import BoardUsersSearchContainer from './board_users_search_container';
import BoardUserDetails from './board_user_details';

class BoardUsersIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedUser: null
    };

    this.setSelectedUser = this.setSelectedUser.bind(this);
  }

  componentDidMount() {
    this.props.fetchBoardShares(this.props.params.boardId);
  }

  setSelectedUser(selectedUser) {
    return (e) => this.setState({ selectedUser });
  }

  handleUnshare(userId) {
    return (e) => {
      const shareToDelete = this.props.boardShares.find((boardShare) => {
        return boardShare.user_id == userId;
      });

      this.props.deleteBoardShare(shareToDelete.id).then(
        () => this.props.removeBoardUser(shareToDelete.user_id)
      ).then(
        () => this.setState({ selectedUser: null })
      ).then(
        () => {
          if (shareToDelete.user_id === this.props.currentUserId) {
            hashHistory.push('/');
          }
        }
      );
    };
  }

  render() {
    const { users, boardCreatorId } = this.props;
    const { selectedUser } = this.state;

    const userLis = users.map((user) => {
      return <BoardUsersIndexItem
        key={ user.id }
        user={ user }
        onClick={ this.setSelectedUser(user) }
        />;
    });

    return (
      <section className='board-users-index'>
        <h1>
          Board Users
        </h1>
        <ul className='board-users-list'>
          { userLis }
        </ul>

        { selectedUser ? <BoardUserDetails
          user={ selectedUser }
          handleUnshare={ this.handleUnshare(selectedUser.id)}
          isBoardCreator={ boardCreatorId === selectedUser.id }/>
        : ''}
        <BoardUsersSearchContainer />
      </section>
    );
  }
}

export default withRouter(BoardUsersIndex);
