import { connect } from 'react-redux';
import List from './list';
import { deleteList } from '../../actions/list_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    list: ownProps.list
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteList: (listId) => dispatch(deleteList(listId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
