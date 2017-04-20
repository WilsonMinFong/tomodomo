import { connect } from 'react-redux';
import Board from './board';
import { fetchBoard } from '../../actions/board_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    board: state.boards[ownProps.params.boardId]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBoard: (boardId) => dispatch(fetchBoard(boardId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
