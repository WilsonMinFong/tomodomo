import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { fetchLists, createList, updateList, deleteList } from './actions/list_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;

  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser }};
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  window.store = store;
  window.fetchLists = fetchLists;
  window.createList = createList;
  window.updateList = updateList;
  window.deleteList = deleteList;

  ReactDOM.render(<Root store={ store } />, root);
});
