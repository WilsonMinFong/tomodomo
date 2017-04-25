import { connect } from 'react-redux';
import Card from './card';
import { updateCard, deleteCard } from '../../actions/card_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    card: state.cards[ownProps.params.cardId],
    boardId: ownProps.params.boardId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCard: (card) => dispatch(updateCard(card)),
    removeCard: (cardId) => dispatch(deleteCard(cardId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);
