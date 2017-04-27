import { connect } from 'react-redux';
import CommentsListItem from './comments_list_item';
import { deleteComment } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    comment: ownProps.comment,
    author: state.boardUsers[ownProps.comment.author_id]
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteComment: () => dispatch(deleteComment(ownProps.comment.id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsListItem);
