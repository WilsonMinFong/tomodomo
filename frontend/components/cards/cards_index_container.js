import { connect } from 'react-redux';
import { fetchCards } from '../../actions/card_actions';
import { selectSortedListCards } from '../../reducers/selectors';
import CardsIndex from './cards_index';

const mapStateToProps = (state, ownProps) => {
  return {
    cards: selectSortedListCards(state, ownProps.listId)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCards: () => dispatch(fetchCards(ownProps.listId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardsIndex);
