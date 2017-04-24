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

export const removeCard = (card) => {
  return {
    type: REMOVE_CARD,
    card
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

export const updateCard = (updatedCard) => (dispatch) => {
  return CardApiUtil.updateCard(updatedCard).then(
    (card) => dispatch(receiveCard(card))
  );
};

export const deleteCard = (cardId) => (dispatch) => {
  return CardApiUtil.deleteCard(cardId).then(
    (card) => dispatch(removeCard(card))
  );
};
