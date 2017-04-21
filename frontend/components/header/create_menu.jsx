import React from 'react';
import BoardFormContainer from '../boards/board_form_container';

const CreateMenu = () => {
  return (
    <div className='create-menu'>
      <BoardFormContainer formType='new'/>
    </div>
  );
};

export default CreateMenu;

// For expansion of menu
// <span>Create a board...</span>
// <div className='description'>Use a board to track a project or manage anything.</div>
