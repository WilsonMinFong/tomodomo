import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import DueDateForm from './due_date_form';
import { updateCard } from '../../actions/card_actions';
import { removeAllPopovers } from '../../actions/popover_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    card: state.cards[ownProps.params.cardId]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCard: (card) => dispatch(updateCard(card)),
    removeAllPopovers: () => dispatch(removeAllPopovers())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(DueDateForm));
