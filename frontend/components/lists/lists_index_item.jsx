import React from 'react';
import ListContainer from './list_container';
import { ItemTypes } from '../../util/constants';
import { DropTarget } from 'react-dnd';

// for react-dnd
const listTarget = {
  drop(props, monitor) {
    const list = Object.assign({}, monitor.getItem(), { ord: props.ord });
    props.updateList(list);
  }
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
