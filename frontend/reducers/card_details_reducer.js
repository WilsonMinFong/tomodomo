import { RECEIVE_CARD, REMOVE_CARD } from '../actions/card_actions';

const _defaultState = {
  id: null,
  name: '',
  description: '',
  ord: null,
  list_id: null
};

const cardDetailsReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_CARD:
      return action.card;
    case REMOVE_CARD:
      return action.card.id === oldState.id ? _defaultState : oldState;
    default:
      return oldState;
  }
};

export default cardDetailsReducer;
