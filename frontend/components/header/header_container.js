import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { logout } from '../../actions/session_actions';
import { receivePopover } from '../../actions/popover_actions';
import Header from './header';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    receivePopover: (name) => dispatch(receivePopover(name))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Header));
