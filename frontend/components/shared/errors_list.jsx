import React from 'react';

const ErrorsList = ({ errors }) => {
  return (
    <ul className='errors'>
      { errors.map((error, i) => <li key={ i }>{ error }</li>) }
    </ul>
  );
};

export default ErrorsList;
