export const fetchCardComments = (cardId) => {
  return $.ajax({
    method: 'get',
    url: `/api/cards/${cardId}/comments`
  });
};

export const createComment = (comment) => {
  return $.ajax({
    method: 'post',
    url: '/api/comments',
    data: { comment }
  });
};

export const updateComment = (comment) => {
  return $.ajax({
    method: 'patch',
    url: `/api/comments/${comment.id}`,
    data: { comment }
  });
};

export const deleteComment = (commentId) => {
  return $.ajax({
    method: 'delete',
    url: `/api/comments/${commentId}`
  });
};
