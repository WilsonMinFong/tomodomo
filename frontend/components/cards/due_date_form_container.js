import { connect } from 'react-redux';
import DueDateForm from './due_date_form';
import { updateCard } from '../../actions/card_actions';

// const mapStateToProps = (state) => {
//
// };

const mapDispatchToProps = (dispatch) => {
  return {
    updateCard: (card) => dispatch(updateCard)
  };
};

export default connect(
  null,
  mapDispatchToProps
)(DueDateForm);
