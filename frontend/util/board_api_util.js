export const fetchBoards = () => {
  return $.ajax({
    method: 'get',
    url: '/api/boards'
  });
};

export const fetchBoard = (boardId) => {
  return $.ajax({
    method: 'get',
    url: `/api/boards/${boardId}`
  });
};

export const createBoard = (board) => {
  return $.ajax({
    method: 'post',
    url: '/api/boards',
    data: { board }
  });
};

export const updateBoard = (board) => {
  return $.ajax({
    method: 'patch',
    url: `/api/boards/${board.id}`,
    data: { board }
  });
};

export const deleteBoard = (boardId) => {
  return $.ajax({
    method: 'delete',
    url: `/api/boards/${boardId}`
  });
};
