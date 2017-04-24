import {
  RECEIVE_CARDS,
  RECEIVE_CARD,
  REMOVE_CARD
} from '../actions/card_actions';
import { merge, pick } from 'lodash';

const cardsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const updatedState = merge({}, oldState);

  switch (action.type) {
    case RECEIVE_CARDS:
      return action.cards;
    case RECEIVE_CARD:
      const card = pick(action.card, ['id', 'list_id', 'ord', 'name']);

      // remove card from previous list if moved to another list
      if (!updatedState[card.list_id] || !updatedState[card.list_id][card.id]) {
        Object.keys(updatedState).forEach((listId) => {
          delete updatedState[listId][card.id];
        });
      }

      return merge(
        updatedState,
        { [card.list_id]: { [card.id]: card } }
      );
    case REMOVE_CARD:
      delete updatedState[action.card.list_id][action.card.id];
      return updatedState;
    default:
      return oldState;
  }
};

export default cardsReducer;
