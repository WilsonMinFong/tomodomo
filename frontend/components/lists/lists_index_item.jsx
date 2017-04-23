import React from 'react';
import ListContainer from './list_container';
import { findDOMNode } from 'react-dom';
import { ItemTypes } from '../../util/constants';
import { DropTarget } from 'react-dnd';

// for react-dnd
const listTarget = {
  hover(props, monitor, component) {
    const dragOrd = monitor.getItem().ord;
    const hoverOrd = props.ord;

    if (dragOrd === hoverOrd) {
      return;
    }

    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();
    const hoverMiddleX = (hoverBoundingRect.right - hoverBoundingRect.left) / 2;
    const clientOffset = monitor.getClientOffset();
    const hoverClientX = hoverBoundingRect.right - clientOffset.x;

    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%

    // Dragging right
    if (dragOrd < hoverOrd && hoverClientX > hoverMiddleX) {
      return;
    }

    // Dragging left
    if (dragOrd > hoverOrd && hoverClientX < hoverMiddleX) {
      return;
    }

    const list = Object.assign({}, monitor.getItem(), { ord: props.ord });
    props.updateList(list);

    monitor.getItem().ord = hoverOrd;
  },
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

class ListsIndexItem extends React.Component {
  render() {
    const { list, ord, connectDropTarget, isOver } = this.props;

    return connectDropTarget(
      <li>
        <ListContainer list={ list }/>
      </li>
    );
  }
}

export default DropTarget(ItemTypes.LIST, listTarget, collect)(ListsIndexItem);
