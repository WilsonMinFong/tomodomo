import React from 'react';
import { ItemTypes } from '../../util/constants';
import { DragSource, DropTarget } from 'react-dnd';
import { Link, withRouter } from 'react-router';

// for react-dnd
const cardSource = {
  beginDrag(props) {
    return {
      id: props.card.id,
      ord: props.card.ord,
      list_id: props.card.list_id
    };
  }
};

const cardTarget = {
  hover(props, monitor, component) {
    const dragCard = monitor.getItem();
    const hoverCard = props.card;

    if (dragCard.list_id === hoverCard.list_id) {
      if (dragCard.ord === hoverCard.ord) {
        return;
      }

      const card = Object.assign({}, monitor.getItem(), { ord: hoverCard.ord });
      props.updateCard(card);

      monitor.getItem().ord = hoverCard.ord;
    }
  },
};

function collectSource(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

function collectTarget(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget()
  };
}

const CardsIndexItem = (props) => {
  const { card, connectDragSource, connectDropTarget, isDragging } = props;
  const className = isDragging ? 'dragging' : '';

  return connectDropTarget(connectDragSource(
    <li className={ className }>
      <Link to={ `/boards/${props.params.boardId}/cards/${card.id}` }>
        {card.name}
      </Link>
    </li>
  ));
};

export default DropTarget(
  ItemTypes.CARD,
  cardTarget,
  collectTarget
)(DragSource(
  ItemTypes.CARD,
  cardSource,
  collectSource
)(withRouter(CardsIndexItem)));
