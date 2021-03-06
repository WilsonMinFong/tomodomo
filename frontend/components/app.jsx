import React from 'react';
import { connect } from 'react-redux';
import HeaderContainer from './header/header_container';
import { removeAllPopovers } from '../actions/popover_actions';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    popover: state.popover
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeAllPopovers: (popover) => (e) => {
      const exceptionEls = Array.from(document.getElementsByClassName(popover));

      // prevent triggering of remove popovers when clicked el has class name
      // matching popover name and when no popovers
      if (!e.nativeEvent.path.some((el) => exceptionEls.includes(el)) && popover)
      {
        dispatch(removeAllPopovers());
      }
    }
  };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    removeAllPopovers: dispatchProps.removeAllPopovers(stateProps.popover),
    loggedIn: stateProps.loggedIn,
    children: ownProps.children
  };
};

const App = ({ children, loggedIn, removeAllPopovers }) => {
  return (
    <div className='app-container' onClick={ removeAllPopovers }>
      { loggedIn ? <HeaderContainer /> : null }
      { children }
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(DragDropContext(HTML5Backend)(App));
