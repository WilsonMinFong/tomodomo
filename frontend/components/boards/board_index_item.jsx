import React from 'react';
import { Link } from 'react-router';

const BoardsIndexItem = ({ board }) => {
  return (
    <li className='col col-1-4'>
      <Link to={ `/boards/${board.id}` }>
        <div>
          { board.name }
        </div>
      </Link>
    </li>
  );
};

export default BoardsIndexItem;
