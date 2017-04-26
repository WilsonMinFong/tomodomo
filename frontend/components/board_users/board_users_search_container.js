import { connect } from 'react-redux';
import BoardUsersSearch from './board_users_search';
import {
  fetchSearchUsers,
  removeAllSearchUsers,
  fetchBoardUsers
} from '../../actions/user_actions';
import { createBoardShare } from '../../actions/board_share_actions';

const mapStateToProps = (state) => {
  return {
    searchUsers: Object.keys(state.searchUsers).map(
      (userId) => state.searchUsers[userId]
    ),
    boardUsers: state.boardUsers
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSearchUsers: (query) => dispatch(fetchSearchUsers(query)),
    removeAllSearchUsers: () => dispatch(removeAllSearchUsers()),
    createBoardShare: (boardShare) => dispatch(createBoardShare(boardShare)),
    fetchBoardUsers: (boardId) => dispatch(fetchBoardUsers(boardId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardUsersSearch);
