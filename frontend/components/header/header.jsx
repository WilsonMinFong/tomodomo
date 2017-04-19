import React from 'react';

const Header = ({ currentUser, logout }) => {
  return (
    <div className='header-container'>
      Welcome, { currentUser.name }!
      <button onClick={ () => logout() }>Log out</button>
    </div>
  )
};

export default Header;
