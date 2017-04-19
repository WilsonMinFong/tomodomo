import React from 'react';
import { Link } from 'react-router';

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
        <div className='logo' >
          <Link to='/'>
            <i className="fa fa-users" aria-hidden="true"></i>
             Tomodomo
          </Link>
        </div>
        <nav>
          { loginLink('Log In', 'button') }
          { signupLink('Sign Up') }
        </nav>
      </header>

      <main>
        <img className='hero' src="https://static.pexels.com/photos/7097/people-coffee-tea-meeting.jpg" />
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
        <span>Project by Wilson Fong</span>
        <a href='https://github.com/WilsonMinFong'>
          <i className="fa fa-github" aria-hidden="true"></i>
        </a>
        <a href='https://www.linkedin.com/in/wilsonmfong'>
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </a>
      </footer>
    </div>
  );
};

export default Splash;
