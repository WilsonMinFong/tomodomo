import React from 'react';

const BoardUserDetails = (props) => {
  const { user, handleUnshare, isBoardCreator } = props;
  const unshareButton = (
    <button onClick={ handleUnshare }>Unshare Board</button>
  );

  return (
    <div className='user-details'>
      <div>Name: { user.name }</div>
      <div>Email: { user.email }</div>
      { isBoardCreator ? <strong>Board Creator</strong> : unshareButton }
    </div>
  );
};

export default BoardUserDetails;
