import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { receivePopover, removeAllPopovers } from '../../actions/popover_actions';
import Header from './header';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    receivePopover: (name) => dispatch(receivePopover(name)),
    closePopovers: () => dispatch(removeAllPopovers())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
