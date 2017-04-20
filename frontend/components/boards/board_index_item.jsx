import React from 'react';

const BoardsIndexItem = ({ board }) => {
  return (
    <li>
      { board.name }
    </li>
  );
};

export default BoardsIndexItem;
