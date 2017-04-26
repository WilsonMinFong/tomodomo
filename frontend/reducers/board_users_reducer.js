import { RECEIVE_BOARD_USERS, REMOVE_BOARD_USER } from '../actions/user_actions';
import { merge } from 'lodash';

const boardUsersReducer = (oldState = {}, action) => {
  switch (action.type) {
    case RECEIVE_BOARD_USERS:
      return action.users;
    case REMOVE_BOARD_USER:
      const updatedState = merge({}, oldState);
      delete updatedState[action.userId];
      return updatedState;
    default:
      return oldState;
  }
};

export default boardUsersReducer;
