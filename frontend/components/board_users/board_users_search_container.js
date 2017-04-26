import { connect } from 'react-redux';
import BoardUsersSearch from './board_users_search';
import {
  fetchSearchUsers,
  removeAllSearchUsers
} from '../../actions/user_actions';

const mapStateToProps = (state) => {
  return {
    searchUsers: state.searchUsers
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSearchUsers: (query) => dispatch(fetchSearchUsers(query)),
    removeAllSearchUsers: () => dispatch(removeAllSearchUsers())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardUsersSearch);
