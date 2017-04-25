import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import Home from './home';
import AuthFormContainer from './auth_form/auth_form_container';
import BoardContainer from './boards/board_container';
import CardContainer from './cards/card_container';
import { clearErrors } from '../actions/session_actions';
import { removeAllPopovers } from '../actions/popover_actions';

const Root = ({ store }) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    if (store.getState().session.currentUser) {
      replace('/');
    }
  };

  const _ensureCurrentUser = (nextState, replace) => {
    if (!store.getState().session.currentUser) {
      replace('/login');
    }
  };

  const _handleAuthOnEnter = (nextState, replace) => {
    _redirectIfLoggedIn(nextState, replace);
    store.dispatch(clearErrors());
  };

  const _handleAppOnEnter = (nextState, replace) => {
    _ensureCurrentUser(nextState, replace);
    store.dispatch(removeAllPopovers());
  }

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ Home }/>
          <Route
            path="signup"
            component={ AuthFormContainer }
            onEnter={ _handleAuthOnEnter }
          />
          <Route
            path="login"
            component={ AuthFormContainer }
            onEnter={ _handleAuthOnEnter }/>
          <Route
            path="boards/:boardId"
            component={ BoardContainer }
            onEnter={ _handleAppOnEnter }
          >
            <Route
              path="cards/:cardId"
              component={ CardContainer }
              onEnter={ _handleAppOnEnter }/>
          </Route>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
