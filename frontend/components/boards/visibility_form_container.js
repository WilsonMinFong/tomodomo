import { connect } from 'react-redux';
import VisibilityForm from './visibility_form';
import { updateBoard } from '../../actions/board_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    board: ownProps.board
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateBoard: (board) => dispatch(updateBoard(board))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibilityForm);
