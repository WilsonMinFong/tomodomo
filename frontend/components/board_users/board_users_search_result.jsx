import React from 'react';

const BoardUsersSearchResult = (props) => {
  const { user, onClick, alreadyBoardUser } = props;

  return (
    <li onClick={ onClick } className={ alreadyBoardUser ? 'disabled' : '' }>
      <div className='icon'>
        { user.name.split(' ').map(function (s) { return s.charAt(0); }).join('') }
      </div>

      <div className='user-info'>
        { user.name } ({ user.email })
      </div>
    </li>
  );
};

export default BoardUsersSearchResult;
