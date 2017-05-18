import { connect } from 'react-redux';
import Card from './card';
import { updateCard, deleteCard } from '../../actions/card_actions';
import { receivePopover, removeAllPopovers } from '../../actions/popover_actions';

const mapStateToProps = (state, ownProps) => {
  const card = state.cards[ownProps.params.cardId];
  return {
    card,
    list: card ? state.lists[card.list_id] : null,
    boardId: ownProps.params.boardId,
    readOnly: !state.session.currentUser,
    popover: state.popover
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCard: (card) => dispatch(updateCard(card)),
    deleteCard: (cardId) => dispatch(deleteCard(cardId)),
    receivePopover: (popover) => dispatch(receivePopover(popover)),
    removeAllPopovers: (popover) => (e) => {
      const exceptionEls = Array.from(document.getElementsByClassName(popover));

      // prevent triggering of remove popovers when clicked el has class name
      // matching popover name and when no popovers
      if (!e.nativeEvent.path.some((el) => exceptionEls.includes(el)) && popover)
      {
        dispatch(removeAllPopovers());
      }
    }
  };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const removeAllPopovers = dispatchProps.removeAllPopovers(stateProps.popover);
  return Object.assign({}, stateProps, dispatchProps, { removeAllPopovers });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Card);
