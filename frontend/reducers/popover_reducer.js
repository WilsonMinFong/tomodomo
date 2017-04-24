import { RECEIVE_POPOVER, REMOVE_ALL_POPOVERS } from '../actions/popover_actions';

const popoverReducer = (oldState = '', action) => {
  switch (action.type) {
    case RECEIVE_POPOVER:
      return oldState === action.popover ? '' : action.popover;
    case REMOVE_ALL_POPOVERS:
      return '';
    default:
      return oldState;
  }
};

export default popoverReducer;
