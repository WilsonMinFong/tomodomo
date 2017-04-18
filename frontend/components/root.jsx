import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import AuthFormContainer from './auth_form/auth_form_container';
import { clearErrors } from '../actions/session_actions';

const Root = ({ store }) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    if (store.getState().session.currentUser) {
      replace('/');
    }

    store.dispatch(clearErrors()); // TODO: move clearErrors out
  };

  const _ensureCurrentUser = (nextState, replace) => {
    if (!store.getState().session.currentUser) {
      replace('/login');
    }
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <Route
            path="signup"
            component={ AuthFormContainer }
            onEnter={ _redirectIfLoggedIn }
          />
          <Route
            path="login"
            component={ AuthFormContainer }
            onEnter={ _redirectIfLoggedIn }/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
