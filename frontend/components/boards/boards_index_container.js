import { connect } from 'react-redux';
import BoardsIndex from './boards_index';
import { fetchBoards, createBoard } from '../../actions/board_actions';
import { receivePopover } from '../../actions/popover_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    boards: Object.keys(state.boards).map((boardId) => state.boards[boardId]),
    menu: ownProps.menu
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBoards: () => dispatch(fetchBoards()),
    createBoard: (board) => dispatch(createBoard(board)),
    receivePopover: (name) => dispatch(receivePopover(name))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardsIndex);
