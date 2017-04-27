import React from 'react';
import { withRouter } from 'react-router';
import CommentsListItemContainer from './comments_list_item_container';

class CommentsList extends React.Component {
  componentDidMount() {
    this.props.fetchCardComments(this.props.params.cardId);
  }

  render() {
    const { comments } = this.props;

    return (
      <ul className='comments-list'>
        { comments.map(
          (comment) => <CommentsListItemContainer
                        key={ comment.id }
                        comment={ comment }/>
        )}
      </ul>
    );
  }
}

export default withRouter(CommentsList);
