import React from 'react';

const BoardUserDetails = (props) => {
  const { user, handleUnshare } = props;

  return (
    <div className='user-details'>
      <div>Name: { user.name }</div>
      <div>Email: { user.email }</div>
      <button onClick={ handleUnshare }>Unshare with User</button>
    </div>
  );
};

export default BoardUserDetails;
