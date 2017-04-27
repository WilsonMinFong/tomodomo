import {
  RECEIVE_CARD_COMMENTS,
  RECEIVE_COMMENT,
  REMOVE_COMMENT
} from '../actions/comment_actions';
import { merge } from 'lodash';

const commentsReducer = (oldState = {}, action) => {
  switch (action.type) {
    case RECEIVE_CARD_COMMENTS:
      return action.comments;
    case RECEIVE_COMMENT:
      return merge({}, oldState, { [action.comment.id]: action.comment});
    case REMOVE_COMMENT:
      const updatedState = merge({}, oldState);
      delete updatedState[action.commentId];
      return updatedState;
    default:
      return oldState;
  }
};

export default commentsReducer;
