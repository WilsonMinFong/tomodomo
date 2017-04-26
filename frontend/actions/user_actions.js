import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_BOARD_USERS = 'RECEIVE_BOARD_USERS';
export const RECEIVE_SEARCH_USERS = 'RECEIVE_SEARCH_USERS';
export const REMOVE_ALL_SEARCH_USERS = 'REMOVE_ALL_SEARCH_USERS';

export const receiveBoardUsers = (users) => {
  return {
    type: RECEIVE_BOARD_USERS,
    users
  };
};

export const receiveSearchUsers = (users) => {
  return {
    type: RECEIVE_SEARCH_USERS,
    users
  };
};

export const removeAllSearchUsers = () => {
  return {
    type: REMOVE_ALL_SEARCH_USERS
  };
};

export const fetchBoardUsers = (boardId) => (dispatch) => {
  return UserApiUtil.fetchBoardUsers(boardId).then(
    (users) => dispatch(receiveBoardUsers(users))
  );
};

export const fetchSearchUsers = (query) => (dispatch) => {
  return UserApiUtil.fetchSearchUsers(query).then(
    (users) => dispatch(receiveSearchUsers(users))
  );
};
