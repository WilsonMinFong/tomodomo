import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { fetchCards, createCard, updateCard, deleteCard } from './util/card_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;

  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser }};
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  window.fetchCards = fetchCards;
  window.createCard = createCard;
  window.updateCard = updateCard;
  window.deleteCard = deleteCard;

  ReactDOM.render(<Root store={ store } />, root);
});
