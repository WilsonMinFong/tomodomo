import React from 'react';

const BoardUsersIndexItem = (props) => {
  const { user, onClick } = props;

  return (
    <li onClick={ onClick }>
      { user.name.split(' ').map((s) => s.charAt(0)).join('') }
    </li>
  );
};

export default BoardUsersIndexItem;
