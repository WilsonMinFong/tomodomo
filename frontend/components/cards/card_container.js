import { connect } from 'react-redux';
import Card from './card';
import { updateCard, deleteCard } from '../../actions/card_actions';
import { receivePopover } from '../../actions/popover_actions';

const mapStateToProps = (state, ownProps) => {
  const card = state.cards[ownProps.params.cardId];
  return {
    card,
    list: card ? state.lists[card.list_id] : null,
    boardId: ownProps.params.boardId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCard: (card) => dispatch(updateCard(card)),
    deleteCard: (cardId) => dispatch(deleteCard(cardId)),
    receivePopover: (popover) => dispatch(receivePopover(popover))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);
