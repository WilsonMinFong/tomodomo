import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import AuthForm from './auth_form';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors,
    formType: ownProps.location.pathname === '/signup' ? 'signup' : 'login'
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formAction = ownProps.location.pathname === '/signup' ? signup : login;

  return {
    formAction: (user) => dispatch(formAction(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthForm);
