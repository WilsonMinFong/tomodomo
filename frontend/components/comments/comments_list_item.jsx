import React from 'react';

const CommentsListItem = (props) => {
  const { comment, author, currentUser, deleteComment } = props;
  const date = new Date(comment.created_at);

  const handleDelete = (e) => {
    props.deleteComment(comment.id);
  };

  const deleteButton = (
    <button onClick={ handleDelete }>Delete</button>
  );

  return (
    <li className='comments-list-item'>
      <div className='user-icon'>
        { author.name.split(' ').map((s) => s.charAt(0)).join('') }
      </div>

      <div className='comments-list-item-content'>
        <h1>{ author.name }</h1>
        <p>{ comment.body }</p>
        <div>
          { date.toLocaleDateString() } at { date.toLocaleTimeString() }
        </div>
        { currentUser.id === author.id ? deleteButton : null }
      </div>
    </li>
  );
};

export default CommentsListItem;
