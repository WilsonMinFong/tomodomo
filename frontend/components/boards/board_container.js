import { connect } from 'react-redux';
import Board from './board';
import { fetchBoard, deleteBoard } from '../../actions/board_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    board: state.boards[ownProps.params.boardId]
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const boardId = ownProps.params.boardId;

  return {
    fetchBoard: () => {
      dispatch(fetchBoard(boardId));
    },
    deleteBoard: () => dispatch(deleteBoard(boardId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
