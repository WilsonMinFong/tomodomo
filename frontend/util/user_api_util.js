export const fetchBoardUsers = (boardId) => {
  return $.ajax({
    method: 'get',
    url: `/api/boards/${boardId}/users`
  });
};
