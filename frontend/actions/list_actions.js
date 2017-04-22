import * as ListApiUtil from '../util/list_api_util';

export const RECEIVE_LISTS = 'RECEIVE_ALL_LISTS';
export const RECEIVE_LIST = 'RECEIVE_LIST';

export const receiveLists = (lists) => {
  return {
    type: RECEIVE_LISTS,
    lists
  };
};

export const receiveList = (list) => {
  return {
    type: RECEIVE_LIST,
    list
  };
};

export const fetchLists = (boardId) => (dispatch) => {
  return ListApiUtil.fetchLists(boardId).then(
    (lists) => dispatch(receiveLists(lists))
  );
};

export const createList = (newList) => (dispatch) => {
  return ListApiUtil.createList(newList).then(
    (list) => dispatch(receiveList(list))
  );
};

export const updateList = (updatedList) => (dispatch, getState) => {
  return ListApiUtil.updateList(updatedList).then(
    (list) => {
      const { lists } = getState();
      
      if (list.ord !== lists[list.id].ord) {
        dispatch(fetchLists(list.board_id));
      } else {
        dispatch(receiveList(list));
      }
    }
  );
};

export const deleteList = (listId) => (dispatch) => {
  return ListApiUtil.deleteList(listId).then(
    (list) => dispatch(fetchLists(list.board_id))
  );
};
