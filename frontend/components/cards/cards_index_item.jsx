import React from 'react';
import { findDOMNode } from 'react-dom';
import { ItemTypes } from '../../util/constants';
import { DragSource, DropTarget } from 'react-dnd';

// for react-dnd
const cardSource = {
  beginDrag(props) {
    return {
      id: props.card.id,
      ord: props.card.ord
    };
  }
};

const cardTarget = {
  hover(props, monitor, component) {
    const dragOrd = monitor.getItem().ord;
    const hoverOrd = props.card.ord;

    if (dragOrd === hoverOrd) {
      return;
    }

    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();
    const clientOffset = monitor.getClientOffset();

    // Perform the move when mouse over other element

    // Dragging up
    if (dragOrd > hoverOrd && clientOffset.y < hoverBoundingRect.top) {
      return;
    }

    // Dragging down
    if (dragOrd < hoverOrd && clientOffset.y > hoverBoundingRect.bottom) {
      return;
    }

    const card = Object.assign({}, monitor.getItem(), { ord: hoverOrd });
    props.updateCard(card);

    monitor.getItem().ord = hoverOrd;
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
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

const CardsIndexItem = (props) => {
  const { card, connectDragSource, connectDropTarget, isDragging } = props;

  return connectDropTarget(connectDragSource(
    <li>
      {card.name}
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
)(CardsIndexItem));
