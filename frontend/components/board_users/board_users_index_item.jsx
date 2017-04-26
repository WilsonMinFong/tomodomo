import React from 'react';

const BoardUsersIndexItem = (props) => {
  const { user } = props;

  return (
    <li>
      { user.name.split(' ').map(function (s) { return s.charAt(0); }).join('') }
    </li>
  );
};

export default BoardUsersIndexItem;
