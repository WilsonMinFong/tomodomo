import { RECEIVE_BOARD_USERS } from '../actions/user_actions';

const boardUsersReducer = (oldState = {}, action) => {
  switch (action.type) {
    case RECEIVE_BOARD_USERS:
      return action.users;
    default:
      return oldState;
  }
};

export default boardUsersReducer;
