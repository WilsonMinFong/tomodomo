import React from 'react';
import { Link, hashHistory } from 'react-router';
import ErrorsList from '../shared/errors_list';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      full_name: '',
      email: '',
      password: ''
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
  }

  handleInput(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.formAction(this.state).then(
      () => hashHistory.push('/'),
      () => this.setState({ full_name: '', email: '', password: '' })
    );
  }

  handleGuestLogin() {
    this.setState({ email: 'guest@example.com', password: 'password' });
  }

  render() {
    const { formType, errors } = this.props;

    let formTitle = '';
    let nameInput = '';
    let submitText = '';
    let otherFormLink = '';
    let otherFormVerb = '';
    let guestLogin = '';

    if (formType === 'signup') {
      formTitle = "Create a Tomodomo Account";

      nameInput = (
        <label>Name
          <input
          type='text'
          value={ this.state.full_name }
          onChange={ this.handleInput('full_name') }
          placeholder='e.g. Hayao Miyazaki'
          />
        </label>
      );

      submitText = 'Create New Account';

      otherFormLink = <Link to='/login'>Log in.</Link>;
      otherFormVerb = 'Already';
    } else {
      formTitle = 'Log in to Tomodomo';

      submitText = 'Log In';

      otherFormLink = <Link to='/signup'>Create a Tomodomo account.</Link>;
      otherFormVerb = 'Don\'t';

      guestLogin = <button onClick={ this.handleGuestLogin }>Guest Login</button>;
    }

    return (
      <div className='auth-form'>
        <h1>{ formTitle }</h1>
        <form onSubmit={ this.handleSubmit }>
          { nameInput }

          <label>Email
            <input
              type='text'
              value={ this.state.email }
              onChange={ this.handleInput('email') }
              placeholder='e.g. hayao.miyazaki@ghibli.jp'
            />
          </label>

          <label>Password
            <input
              type='password'
              value={ this.state.password }
              onChange={ this.handleInput('password') }
              placeholder='e.g. ••••••••••'
            />
          </label>

          { errors ? <ErrorsList errors={ errors } /> : '' }

          <input type='submit' value={ submitText }/>
          { guestLogin }
        </form>
        <span>{ otherFormVerb } have an account? { otherFormLink }</span>
      </div>
    );
  }
}

export default AuthForm;
