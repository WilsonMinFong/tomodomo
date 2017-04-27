import { connect } from 'react-redux';
import CommentsList from './comments_list';
import { fetchCardComments } from '../../actions/comment_actions';
import { selectCommentsSortedByCreatedDate } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return {
    comments: selectCommentsSortedByCreatedDate(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCardComments: (cardId) => dispatch(fetchCardComments(cardId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsList);
