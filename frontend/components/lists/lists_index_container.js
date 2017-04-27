import { connect } from 'react-redux';
import { selectSortedLists } from '../../reducers/selectors';
import {
  fetchLists,
  createList,
  updateList
} from '../../actions/list_actions';
import { receivePopover } from '../../actions/popover_actions';
import ListsIndex from './lists_index';
import { withRouter } from 'react-router';

const mapStateToProps = (state) => {
  return {
    lists: selectSortedLists(state),
    readOnly: !state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchLists: (boardId) => dispatch(fetchLists(boardId)),
    createList: (list) => dispatch(createList(list)),
    updateList: (list) => dispatch(updateList(list)),
    receivePopover: (popover) => dispatch(receivePopover(popover))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ListsIndex));
