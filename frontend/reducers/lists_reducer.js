import { RECEIVE_LISTS, RECEIVE_LIST } from '../actions/list_actions';

import { merge } from 'lodash';

const listsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_LISTS:
      return action.lists;
    case RECEIVE_LIST:
      return merge({}, oldState, { [action.list.id]: action.list });
    default:
      return oldState;
  }
};

export default listsReducer;
