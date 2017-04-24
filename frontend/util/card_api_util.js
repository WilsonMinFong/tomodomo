export const fetchCards = (boardId) => {
  return $.ajax({
    method: 'get',
    url: `/api/boards/${boardId}/cards`
  });
};

export const fetchCard = (cardId) => {
  return $.ajax({
    method: 'get',
    url: `/api/cards/${cardId}`
  });
};

export const createCard = (card) => {
  return $.ajax({
    method: 'post',
    url: '/api/cards',
    data: { card }
  });
};

export const updateCard = (card) => {
  return $.ajax({
    method: 'patch',
    url: `/api/cards/${card.id}`,
    data: { card }
  });
};

export const deleteCard = (cardId) => {
  return $.ajax({
    method: 'delete',
    url: `/api/cards/${cardId}`
  });
};
