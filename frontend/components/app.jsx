import React from 'react';
import { connect } from 'react-redux';
import HeaderContainer from './header/header_container';

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser)
  }
};

const App = ({ children, loggedIn }) => {
  return (
    <div className='app-container'>
      { loggedIn ? <HeaderContainer /> : null }
      { children }
    </div>
  );
};

export default connect(
  mapStateToProps,
  null
)(App);
