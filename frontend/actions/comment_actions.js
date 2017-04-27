import * as CommentApiUtil from '../util/comment_api_util';

export const RECEIVE_CARD_COMMENTS = 'RECEIVE_CARD_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const receiveCardComments = (comments) => {
  return {
    type: RECEIVE_CARD_COMMENTS,
    comments
  };
};

export const receiveComment = (comment) => {
  return {
    type: RECEIVE_COMMENT,
    comment
  };
};

export const removeComment = (commentId) => {
  return {
    type: REMOVE_COMMENT,
    commentId
  };
};

export const fetchCardComments = (cardId) => (dispatch) => {
  return CommentApiUtil.fetchCardComments(cardId).then(
    (comments) => dispatch(receiveCardComments(comments))
  );
};

export const createComment = (newComment) => (dispatch) => {
  return CommentApiUtil.createComment(newComment).then(
    (comment) => dispatch(receiveComment(comment))
  );
};

export const updateComment = (updatedComment) => (dispatch) => {
  return CommentApiUtil.updateComment(updatedComment).then(
    (comment) => dispatch(receiveComment(comment))
  );
};

export const deleteComment = (commentId) => (dispatch) => {
  return CommentApiUtil.deleteComment(commentId).then(
    () => dispatch(removeComment(commentId))
  );
};
