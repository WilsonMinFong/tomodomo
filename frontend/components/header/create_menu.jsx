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
