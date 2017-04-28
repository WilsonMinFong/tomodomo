import React from 'react';

const CommentsListItem = (props) => {
  const { comment, author, currentUser, deleteComment } = props;
  const date = new Date(comment.created_at);

  const handleDelete = (e) => {
    props.deleteComment(comment.id);
  };

  const deleteLink = (
    <span> - <a onClick={ handleDelete } className='delete-comment'>Delete</a></span>
  );

  if (!author) { return null; }

  return (
    <li className='comments-list-item'>
      <div className='user-icon'>
        <span className='initials'>
          { author.name.split(' ').map((s) => s.charAt(0)).join('') }
        </span>
      </div>

      <div className='comments-list-item-content'>
        <h1>{ author.name }</h1>
        <p>{ comment.body }</p>
        <div className='comments-list-item-content-footer'>
            { date.toLocaleDateString() } at { date.toLocaleTimeString() }
            { currentUser && currentUser.id === author.id ? deleteLink : null }
        </div>
      </div>
    </li>
  );
};

export default CommentsListItem;
