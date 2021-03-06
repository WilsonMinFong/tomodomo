import { connect } from 'react-redux';
import { fetchCards, updateCard } from '../../actions/card_actions';
import { receivePopover } from '../../actions/popover_actions';
import { selectSortedListCards } from '../../reducers/selectors';
import CardsIndex from './cards_index';

const mapStateToProps = (state, ownProps) => {
  return {
    cards: selectSortedListCards(state, ownProps.listId),
    listId: ownProps.listId,
    readOnly: !state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCards: () => dispatch(fetchCards(ownProps.listId)),
    updateCard: (card) => dispatch(updateCard(card)),
    receivePopover: (popover) => dispatch(receivePopover(popover))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardsIndex);
