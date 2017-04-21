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
  return {
    removeAllPopovers: (e) => {
      const exceptionEls = Array.from(document.getElementsByClassName(ownProps.name));

      if (!e.path.some((el) => exceptionEls.includes(el)))
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
