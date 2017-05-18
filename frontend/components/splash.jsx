import React from 'react';
import { Link } from 'react-router';
import Logo from './shared/logo';

const Splash = () => {
  const signupLink = (linkText) => {
    return (
      <Link to='/signup' className='button'>{ linkText }</Link>
    );
  };

  const loginLink = (linkText, className) => {
    return (
      <Link to='/login' className={ className }>{ linkText }</Link>
    );
  };

  return (
    <div className='splash-container'>
      <header>
        <Logo />
        <nav>
          { loginLink('Log In', 'button') }
          { signupLink('Sign Up') }
        </nav>
      </header>

      <main>
        <div className='overlay'>
          <div className='overlay-contents'>
            <p className='headline'>
              Tomodomo lets you work together to accomplish more goals.
            </p>
            <p className='subtitle'>
              Tomodomo's boards, lists, and cards enable you to organize and
              prioritize your projects in a fun, flexible and rewarding way.
            </p>
            { signupLink('Sign Up - It\'s Free.') }
            <p className='login-text'>
              Already use Tomodomo? { loginLink('Log in.') }
            </p>
          </div>
        </div>
      </main>

      <footer>
        <nav className='personal-links'>
          <a href='http://wilsonfong.me/'>
            <i className="fa fa-globe" aria-hidden="true"></i>
            Personal
          </a>
          <a href='https://github.com/WilsonMinFong'>
            <i className="fa fa-github" aria-hidden="true"></i>
            Github
          </a>
          <a href='https://www.linkedin.com/in/wilsonmfong'>
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            LinkedIn
          </a>
        </nav>

        <div className='copyright'>
          &copy; Copyleft 2017, Wilson Fong, Inc.  All lefts reserved.
        </div>
      </footer>
    </div>
  );
};

export default Splash;
