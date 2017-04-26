import React from 'react';
import { withRouter } from 'react-router';
import BoardUsersSearchResult from './board_users_search_result';

class BoardUsersSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleResultClick = this.handleResultClick.bind(this);
  }

  componentWillUnmount() {
    this.props.removeAllSearchUsers();
  }

  handleInput(e) {
    const query = e.currentTarget.value;
    this.setState({ query });
    this.props.fetchSearchUsers(query);
  }

  handleResultClick(userId) {
    return (e) => {
      const boardShare = {
        user_id: userId,
        board_id: this.props.params.boardId
      };
      this.props.createBoardShare(boardShare).then(
        () => this.setState({ query: '' })
      ).then(
        () => this.props.removeAllSearchUsers()
      ).then(
        () => this.props.fetchBoardUsers(this.props.params.boardId)
      );
    };
  }

  render() {
    const { searchUsers } = this.props;

    return (
      <section className='board-users-search'>
        <label>Search for users
          <input onChange={ this.handleInput } value={ this.state.query }/>
        </label>
        <ul className='search-results'>
          { searchUsers.map((user) => {
            return (
              <BoardUsersSearchResult
                key={ user.id }
                user={ user }
                onClick={ this.handleResultClick(user.id) }
              />
            );
          })}
        </ul>
      </section>
    );
  }
}

export default withRouter(BoardUsersSearch);
