import React from 'react';

const UserMenu = ({ currentUser, logout }) => {
  return (
    <div className='user-menu'>
      <h1>{ currentUser.name }</h1>
      <ul>
        <li onClick={ () => logout() }>
          <a>
            <div>Log Out</div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
