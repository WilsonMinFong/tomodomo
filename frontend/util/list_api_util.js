export const fetchLists = (boardId) => {
  return $.ajax({
    method: 'get',
    url: `/api/boards/${boardId}/lists`
  });
};

export const createList = (list) => {
  return $.ajax({
    method: 'post',
    url: '/api/lists',
    data: { list }
  });
};

export const updateList = (list) => {
  return $.ajax({
    method: 'patch',
    url: `/api/lists/${list.id}`,
    data: { list }
  });
};

export const deleteList = (listId) => {
  return $.ajax({
    method: 'delete',
    url: `/api/lists/${listId}`
  });
};
