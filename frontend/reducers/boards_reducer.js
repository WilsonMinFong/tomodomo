import {
  RECEIVE_BOARD,
  RECEIVE_BOARDS,
  REMOVE_BOARD
} from '../actions/board_actions';

import { merge } from 'lodash';

const boardsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_BOARDS:
      return action.boards;
    case RECEIVE_BOARD:
      return merge({}, oldState, { [action.board.id]: action.board });
    case REMOVE_BOARD:
      let newState = merge({}, oldState);
      delete newState[action.boardId];
      return newState;
    default:
      return oldState;
  }
};

export default boardsReducer;
