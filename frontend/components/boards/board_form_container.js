import { connect } from 'react-redux';
import BoardForm from './board_form';
import { createBoard } from '../../actions/board_actions';
import { removeAllPopovers } from '../../actions/popover_actions';

const mapDispatchToProps = (dispatch) => {
  return {
    createBoard: (board) => dispatch(createBoard(board)),
    removeAllPopovers: () => dispatch(removeAllPopovers())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(BoardForm);
