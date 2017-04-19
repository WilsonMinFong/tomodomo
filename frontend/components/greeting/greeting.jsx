import React from 'react';
import { Link } from 'react-router';

const loggedOutGreeting = () => {
  return (
    <div>
      <Link to='/signup'>Sign up</Link> /
      <Link to='/login'>Log in</Link>
    </div>
  );
};

const loggedInGreeting = (currentUser, logout) => {
  return (
    <div className='greeting-container'>
      Welcome, { currentUser.full_name }!
      <button onClick={ () => logout() }>Log out</button>
    </div>
  );
};

const Greeting = ({ currentUser, logout }) => {
  return currentUser ? loggedInGreeting(currentUser, logout) : loggedOutGreeting();
};

export default Greeting;
