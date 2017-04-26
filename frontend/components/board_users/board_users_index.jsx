import React from 'react';
import { withRouter } from 'react-router';
import BoardUsersIndexItem from './board_users_index_item';
import BoardUsersSearchContainer from './board_users_search_container';

class BoardUsersIndex extends React.Component {
  componentDidMount() {
    this.props.fetchBoardUsers(this.props.params.boardId);
  }

  render() {
    const { users } = this.props;

    const userLis = users.map((user) => {
      return <BoardUsersIndexItem key={ user.id } user={ user } />;
    });

    return (
      <section className='board-users-index'>
        <h1>
          Shared Users
        </h1>
        <ul className='board-users-list'>
          { userLis }
        </ul>
        <BoardUsersSearchContainer />
      </section>
    );
  }
}

export default withRouter(BoardUsersIndex);
