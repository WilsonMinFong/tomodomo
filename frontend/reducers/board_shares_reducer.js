import {
  RECEIVE_BOARD_SHARES,
  RECEIVE_BOARD_SHARE,
  REMOVE_BOARD_SHARE
} from '../actions/board_share_actions';
import { merge } from 'lodash';

const boardSharesReducer = (oldState = {}, action) => {
  switch (action.type) {
    case RECEIVE_BOARD_SHARES:
      return action.boardShares;
    case RECEIVE_BOARD_SHARE:
      return merge({}, oldState, { [action.boardShare.id] : action.boardShare });
    case REMOVE_BOARD_SHARE:
      const updatedState = merge({}, oldState);
      delete updatedState[action.boardShareId];
      return updatedState;
    default:
      return oldState;
  }
};

export default boardSharesReducer;
