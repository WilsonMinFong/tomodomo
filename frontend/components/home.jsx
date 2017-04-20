import React from 'react';
import { connect } from 'react-redux';

import Splash from './splash';
import BoardsIndexContainer from './boards/boards_index_container';

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser)
  };
};

const Home = ({ loggedIn }) => {
  return loggedIn ? <BoardsIndexContainer /> : <Splash />;
};

export default connect(
  mapStateToProps,
  null
)(Home);
