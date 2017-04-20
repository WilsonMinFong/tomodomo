import * as BoardApiUtil from '../util/board_api_util';

export const RECEIVE_BOARD = 'RECEIVE_BOARD';
export const RECEIVE_BOARDS = 'RECEIVE_ALL_BOARDS';
export const REMOVE_BOARD = 'REMOVE_BOARD';

export const receiveBoard = (board) => {
  return {
    type: RECEIVE_BOARD,
    board
  };
};

export const receiveBoards = (boards) => {
  return {
    type: RECEIVE_BOARDS,
    boards
  };
};

export const removeBoard = (boardId) => {
  return {
    type: REMOVE_BOARD,
    boardId
  };
};

export const fetchBoard = (boardId) => (dispatch) => {
  return BoardApiUtil.fetchBoard(boardId).then(
    (board) => dispatch(receiveBoard(board))
  );
};

export const fetchBoards = () => (dispatch) => {
  return BoardApiUtil.fetchBoards().then(
    (boards) => dispatch(receiveBoards(boards))
  );
};

export const createBoard = (newBoard) => (dispatch) => {
  return BoardApiUtil.createBoard(newBoard).then(
    (board) => dispatch(receiveBoard(board))
  );
};

export const updateBoard = (updatedBoard) => (dispatch) => {
  return BoardApiUtil.updateBoard(updatedBoard).then(
    (board) => dispatch(receiveBoard(board))
  );
};

export const deleteBoard = (boardId) => (dispatch) => {
  return BoardApiUtil.deleteBoard(boardId).then(
    () => dispatch(removeBoard(boardId))
  );
};