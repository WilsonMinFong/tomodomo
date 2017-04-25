import { connect } from 'react-redux';
import { createCard, updateCard } from '../../actions/card_actions';
import { removeAllPopovers } from '../../actions/popover_actions';
import CardForm from './card_form';

const mapStateToProps = (state, ownProps) => {
  return {
    formType: ownProps.formType,
    card: ownProps.card,
    list: state.lists[ownProps.listId]
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formAction =
    ownProps.formType === 'new' ? createCard : updateCard;

  return {
    formAction: (card) => dispatch(formAction(card)),
    removeAllPopovers: () => dispatch(removeAllPopovers())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardForm);
