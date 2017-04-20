import React from 'react';
import { Link } from 'react-router';

const BoardsIndexItem = ({ board }) => {
  return (
    <li>
      <Link to={ `/boards/${board.id}` }>
        { board.name }
      </Link>
    </li>
  );
};

export default BoardsIndexItem;
