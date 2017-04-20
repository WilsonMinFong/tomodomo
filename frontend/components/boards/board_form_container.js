import { connect } from 'react-redux';
import BoardForm from './board_form';
import { createBoard } from '../../actions/board_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    onSubmit: ownProps.onSubmit
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createBoard: (board) => dispatch(createBoard(board))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardForm);
