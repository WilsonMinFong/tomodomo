import * as CardApiUtil from '../util/card_api_util';

export const RECEIVE_CARDS = 'RECEIVE_CARDS';
export const RECEIVE_CARD = 'RECEIVE_CARD';
export const REMOVE_CARD = 'REMOVE_CARD';

export const receiveCards = (cards) => {
  return {
    type: RECEIVE_CARDS,
    cards
  };
};

export const receiveCard = (card) => {
  return {
    type: RECEIVE_CARD,
    card
  };
};

export const removeCard = (cardId) => {
  return {
    type: REMOVE_CARD,
    cardId
  };
};

export const fetchCards = (boardId) => (dispatch) => {
  return CardApiUtil.fetchCards(boardId).then(
    (cards) => dispatch(receiveCards(cards))
  );
};

export const fetchCard = (cardId) => (dispatch) => {
  return CardApiUtil.fetchCard(cardId).then(
    (card) => dispatch(receiveCard(card))
  );
};

export const createCard = (newCard) => (dispatch) => {
  return CardApiUtil.createCard(newCard).then(
    (card) => dispatch(receiveCard(card))
  );
};

export const updateCard = (updatedCard) => (dispatch, getState) => {
  return CardApiUtil.updateCard(updatedCard).then(
    (card) => {
      const { cards } = getState();

      if (card.ord !== cards[card.id].ord) {
        // if a card's order changed, fetch cards from both old list
        if (card.list_id !== cards[card.id].list_id) {
          dispatch(fetchCards(card[card.id].list_id));
        }
        dispatch(fetchCards(card.list_id));
      } else {
        dispatch(receiveCard(card));
      }
    }
  );
};

export const deleteCard = (cardId) => (dispatch) => {
  return CardApiUtil.deleteCard(cardId).then(
    () => dispatch(removeCard(cardId))
  );
};
