import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { fetchCards, fetchCard, createCard, updateCard, deleteCard } from './actions/card_actions';
import { selectSortedListCards } from './reducers/selectors';

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

  window.fetchCards = fetchCards;
  window.fetchCard = fetchCard;
  window.createCard = createCard;
  window.updateCard = updateCard;
  window.deleteCard = deleteCard;

  window.selectSortedListCards = selectSortedListCards;

  ReactDOM.render(<Root store={ store } />, root);
});
