import React from 'react';
import { connect } from 'react-redux';

const DeleteConfirmation = ({ deleteAction, objectName }) => {
  return (
    <div className='delete-confirmation'>
      <p>
        Are you sure you want to delete this { objectName }?
      </p>
      <button onClick={ deleteAction }>
        Delete
      </button>
    </div>
  );
};

export default DeleteConfirmation;
