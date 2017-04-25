import {
  RECEIVE_CARDS,
  RECEIVE_CARD,
  REMOVE_CARD
} from '../actions/card_actions';
import { merge } from 'lodash';

const cardsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const updatedState = merge({}, oldState);

  switch (action.type) {
    case RECEIVE_CARDS:
      return merge(updatedState, action.cards);
    case RECEIVE_CARD:
      const card = action.card;
      return merge(updatedState, { [card.id]: card});
    case REMOVE_CARD:
      delete updatedState[action.cardId];
      return updatedState;
    default:
      return oldState;
  }
};

export default cardsReducer;
