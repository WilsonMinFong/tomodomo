import React from 'react';
import { connect } from 'react-redux';

import Splash from './splash';

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser)
  };
};

const Home = ({ loggedIn }) => {
  return loggedIn ? (<h1>BoardsIndexContainer</h1>) : <Splash />;
};

export default connect(
  mapStateToProps,
  null
)(Home);
