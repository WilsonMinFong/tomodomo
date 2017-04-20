import { connect } from 'react-redux';
import BoardsIndex from './boards_index';
import { fetchBoards, createBoard } from '../../actions/board_actions';

const mapStateToProps = (state) => {
  return {
    boards: Object.keys(state.boards).map((boardId) => state.boards[boardId])
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBoards: () => dispatch(fetchBoards()),
    createBoard: (board) => dispatch(createBoard(board))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardsIndex);
