import React from 'react';

const UserMenu = ({ currentUser, logout }) => {
  return (
    <div className='user-menu'>
      <span>{ currentUser.name }</span>
      <ul>
        <li>
          <a onClick={ () => logout() }>
            <div>Log Out</div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
