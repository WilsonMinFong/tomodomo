import {
  RECEIVE_SEARCH_USERS,
  REMOVE_ALL_SEARCH_USERS
} from '../actions/user_actions';

const searchUsersReducer = (oldState = {}, action) => {
  switch (action.type) {
    case RECEIVE_SEARCH_USERS:
      return action.users;
    case REMOVE_ALL_SEARCH_USERS:
      return {};
    default:
      return oldState;
  }
};

export default searchUsersReducer;
