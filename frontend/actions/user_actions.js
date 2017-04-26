import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_BOARD_USERS = 'RECEIVE_BOARD_USERS';

export const receiveBoardUsers = (users) => {
  return {
    type: RECEIVE_BOARD_USERS,
    users
  };
};

export const fetchBoardUsers = (boardId) => (dispatch) => {
  return UserApiUtil.fetchBoardUsers(boardId).then(
    (users) => dispatch(receiveBoardUsers(users))
  );
};
