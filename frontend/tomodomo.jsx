import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { fetchSearchUsers } from './actions/user_actions';

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
  window.fetchSearchUsers = fetchSearchUsers;

  ReactDOM.render(<Root store={ store } />, root);
});
