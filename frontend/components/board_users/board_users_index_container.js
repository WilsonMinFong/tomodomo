import { connect } from 'react-redux';
import {
  fetchBoardUsers
} from '../../actions/user_actions';
import BoardUsersIndex from './board_users_index';

const mapStateToProps = (state) => {
  return {
    users: Object.keys(state.boardUsers).map(
      (userId) => state.boardUsers[userId]
    )
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBoardUsers: (boardId) => dispatch(fetchBoardUsers(boardId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardUsersIndex);
