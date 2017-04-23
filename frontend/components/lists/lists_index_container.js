import { connect } from 'react-redux';
import { selectSortedLists } from '../../reducers/selectors';
import {
  fetchLists,
  createList
} from '../../actions/list_actions';
import ListsIndex from './lists_index';
import { withRouter } from 'react-router';

const mapStateToProps = (state) => {
  return {
    lists: selectSortedLists(state)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchLists: (boardId) => dispatch(fetchLists(boardId)),
    createList: (list) => dispatch(createList(list))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ListsIndex));
