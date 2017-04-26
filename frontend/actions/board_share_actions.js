import * as BoardShareApiUtil from '../util/board_share_api_util';
import { fetchBoardUsers } from '../actions/user_actions';

export const RECEIVE_BOARD_SHARES = 'RECEIVE_BOARD_SHARES';
export const RECEIVE_BOARD_SHARE = 'RECEIVE_BOARD_SHARE';
export const REMOVE_BOARD_SHARE = 'REMOVE_BOARD_SHARE';

export const receiveBoardShares = (boardShares) => {
  return {
    type: RECEIVE_BOARD_SHARES,
    boardShares
  };
};

export const receiveBoardShare = (boardShare) => {
  return {
    type: RECEIVE_BOARD_SHARE,
    boardShare
  };
};

export const removeBoardShare = (boardShareId) => {
  return {
    type: REMOVE_BOARD_SHARE,
    boardShareId
  };
};

export const fetchBoardShares = (boardId) => (dispatch) => {
  return BoardShareApiUtil.fetchBoardShares(boardId).then(
    (boardShares) => dispatch(receiveBoardShares(boardShares))
  ).then(
    () => dispatch(fetchBoardUsers(boardId))
  );
};

export const createBoardShare = (boardShare) => (dispatch) => {
  return BoardShareApiUtil.createBoardShare(boardShare).then(
    (boardShare) => dispatch(receiveBoardShare(boardShare))
  );
};

export const deleteBoardShare = (boardShareId) => (dispatch) => {
  return BoardShareApiUtil.deleteBoardShare(boardShareId).then(
    () => dispatch(removeBoardShare(boardShareId))
  );
};
