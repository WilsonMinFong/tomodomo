import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createList, updateList } from '../../actions/list_actions';
import { removeAllPopovers } from '../../actions/popover_actions';
import ListForm from './list_form';

const mapStateToProps = (state, ownProps) => {
  return {
    formType: ownProps.formType,
    list: ownProps.list
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formAction =
    ownProps.formType === 'new' ? createList : updateList;

  return {
    formAction: (board) => dispatch(formAction(board)),
    removeAllPopovers: () => dispatch(removeAllPopovers())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ListForm));
