export const fetchBoardUsers = (boardId) => {
  return $.ajax({
    method: 'get',
    url: `/api/boards/${boardId}/users`
  });
};

export const fetchSearchUsers = (query) => {
  return $.ajax({
    method: 'get',
    url: '/api/users/search',
    data: { query }
  });
};
