import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import boardsReducer from './boards_reducer';
import popoverReducer from './popover_reducer';

export default combineReducers({
  session: sessionReducer,
  boards: boardsReducer,
  popover: popoverReducer
});
