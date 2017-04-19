import React from 'react';
import { Link } from 'react-router';

const loggedOutSplash = () => {
  return (
    <div>
      <Link to='/signup'>Sign up</Link> /
      <Link to='/login'>Log in</Link>
    </div>
  );
};

const Splash = ({ currentUser, logout }) => {
  return currentUser ? null : loggedOutSplash();
};

export default Splash;
