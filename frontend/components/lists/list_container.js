import { connect } from 'react-redux';
import List from './list';
import { deleteList } from '../../actions/list_actions';
import { receivePopover } from '../../actions/popover_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    list: ownProps.list,
    readOnly: !state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteList: (listId) => dispatch(deleteList(listId)),
    receivePopover: (popover) => dispatch(receivePopover(popover))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
