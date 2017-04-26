export const fetchBoardShares = (boardId) => {
  return $.ajax({
    method: 'get',
    url: `/api/boards/${boardId}/board_shares`
  });
};

export const createBoardShare = (board_share) => {
  return $.ajax({
    method: 'post',
    url: '/api/board_shares',
    data: { board_share }
  });
};

export const deleteBoardShare = (boardShareId) => {
  return $.ajax({
    method: 'delete',
    url: `/api/board_shares/${boardShareId}`
  });
};
