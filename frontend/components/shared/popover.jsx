import React from 'react';
import { connect } from 'react-redux';

import { removeAllPopovers } from '../../actions/popover_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    isOpened: state.popover === ownProps.name,
    name: ownProps.name
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  //  ||
  // !e.path.includes(document.getElementById(ownProps.id))
  // !e.path.includes(document.getElementsByClassName('popover')[0])
  return {
    removeAllPopovers: (e) => {
      const exceptionEls = Array.from(document.getElementsByClassName(ownProps.name));
      // debugger
      if (!exceptionEls.includes(e.target))
      {
        dispatch(removeAllPopovers());
      }
    }
  };
};

const Popover = ({ isOpened, removeAllPopovers, name, children }) => {
  if (isOpened) {
    document.body.addEventListener('click', removeAllPopovers);

    return (
      <div className={ `popover ${ name }` }>
        { children }
      </div>
    );
  } else {
    document.body.removeEventListener('click', removeAllPopovers);
    return null;
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Popover);
