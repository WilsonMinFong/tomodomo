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

  render() {
    const { formType, errors } = this.props;

    let formTitle = '';
    let nameInput = '';
    let submitText = '';
    let otherFormLink = '';

    if (formType === 'signup') {
      formTitle = "Create a Tomodomo Account";

      nameInput = (
        <label>Name
          <input
          type='text'
          value={ this.state.full_name }
          onChange={ this.handleInput('full_name') }
          />
        </label>
      );

      submitText = 'Create New Account';

      otherFormLink = <Link to='/login'>Log in.</Link>;
    } else {
      formTitle = 'Log in to Tomodomo';

      submitText = 'Log In';

      otherFormLink = <Link to='/signup'>Create a new Tomodomo account.</Link>;
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
            />
          </label>

          <label>Password
            <input
              type='password'
              value={ this.state.password }
              onChange={ this.handleInput('password') }
            />
          </label>

          <input type='submit' value={ submitText }/>
        </form>
        { errors ? <ErrorsList errors={ errors } /> : '' }
        { otherFormLink }
      </div>
    );
  }
}

export default AuthForm;
