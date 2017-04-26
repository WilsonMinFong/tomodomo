import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import boardsReducer from './boards_reducer';
import popoverReducer from './popover_reducer';
import listsReducer from './lists_reducer';
import cardsReducer from './cards_reducer';
import boardSharesReducer from './board_shares_reducer';
import usersReducer from './users_reducer';

export default combineReducers({
  session: sessionReducer,
  boards: boardsReducer,
  popover: popoverReducer,
  lists: listsReducer,
  cards: cardsReducer,
  boardShares: boardSharesReducer,
  users: usersReducer
});
