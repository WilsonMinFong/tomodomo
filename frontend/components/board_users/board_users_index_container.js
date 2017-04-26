import { connect } from 'react-redux';
import {
  fetchBoardShares,
  deleteBoardShare
} from '../../actions/board_share_actions';
import {
  removeBoardUser
} from '../../actions/user_actions';
import BoardUsersIndex from './board_users_index';

const mapStateToProps = (state) => {
  return {
    users: Object.keys(state.boardUsers).map(
      (userId) => state.boardUsers[userId]
    ),
    boardShares: Object.keys(state.boardShares).map(
      (shareId) => state.boardShares[shareId]
    )
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBoardShares: (boardId) => dispatch(fetchBoardShares(boardId)),
    deleteBoardShare: (shareId) => dispatch(deleteBoardShare(shareId)),
    removeBoardUser: (userId) => dispatch(removeBoardUser(userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardUsersIndex);
