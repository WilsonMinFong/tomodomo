import React from 'react';

const BoardUsersIndexItem = (props) => {
  const { user, onClick } = props;

  return (
    <li onClick={ onClick } className='user-icon'>
      <span className='initials'>
        { user.name.split(' ').map((s) => s.charAt(0)).join('') }
      </span>
    </li>
  );
};

export default BoardUsersIndexItem;
