import { connect } from 'react-redux';
import Card from './card';
import { updateCard, deleteCard } from '../../actions/card_actions';

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
    deleteCard: (cardId) => dispatch(deleteCard(cardId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);
