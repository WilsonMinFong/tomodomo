import { connect } from 'react-redux';
import Board from './board';
import { fetchBoard, deleteBoard } from '../../actions/board_actions';
import { receivePopover } from '../../actions/popover_actions';
import { selectReadOnlyStatus } from '../../reducers/selectors';
import { fetchBoardUsers } from '../../actions/user_actions';
import { receiveCardComments } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    board: state.boards[ownProps.params.boardId],
    children: ownProps.children,
    readOnly: !state.session.currentUser,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const boardId = ownProps.params.boardId;

  return {
    fetchBoard: () => {
      dispatch(fetchBoard(boardId));
    },
    deleteBoard: () => dispatch(deleteBoard(boardId)),
    receivePopover: (name) => dispatch(receivePopover(name)),
    fetchBoardUsers: () => dispatch(fetchBoardUsers(boardId)),
    clearCardComments: () => dispatch(receiveCardComments({}))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
