import { connect } from 'react-redux';
import BoardForm from './board_form';
import { createBoard, updateBoard } from '../../actions/board_actions';
import { removeAllPopovers } from '../../actions/popover_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    formType: ownProps.formType,
    board: ownProps.board
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formAction = ownProps.formType === 'new' ? createBoard : updateBoard;

  return {
    formAction: (board) => dispatch(formAction(board)),
    removeAllPopovers: () => dispatch(removeAllPopovers())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardForm);
