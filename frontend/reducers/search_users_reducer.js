import { RECEIVE_SEARCH_USERS } from '../actions/user_actions';

const searchUsersReducer = (oldState = {}, action) => {
  switch (action.type) {
    case RECEIVE_SEARCH_USERS:
      return action.users;
    default:
      return oldState;
  }
};

export default searchUsersReducer;
