import React from 'react';

import ListFormContainer from './list_form_container';
import CardsIndexContainer from '../cards/cards_index_container';
import { ItemTypes } from '../../util/constants';
import { DragSource } from 'react-dnd';
import Popover from '../shared/popover';
import DeleteConfirmation from '../shared/delete_confirmation';

// for react-dnd
const listSource = {
  beginDrag(props) {
    return {
      id: props.list.id,
      ord: props.list.ord
    };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

class List extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.togglePopover = this.togglePopover.bind(this);
  }

  handleDelete() {
    this.props.deleteList(this.props.list.id);
  }

  togglePopover(name) {
    return (e) => {
      e.stopPropagation();
      this.props.receivePopover(name);
    };
  }

  render() {
    const { list, connectDragSource, isDragging } = this.props;
    const className = isDragging ? 'list-container dragging' : 'list-container';

    return connectDragSource(
      <div className={ className }>
        <div className='header'>
          <ListFormContainer formType='update' list={ list }/>
          <div className='popover-container'>
            <button onClick={ this.togglePopover(`delete-list-${list.id}`) } className={`delete-list-${list.id}`}>
              <i className="fa fa-times" aria-hidden="true"></i>
            </button>
            <Popover name={`delete-list-${list.id}`}>
              <DeleteConfirmation objectName='list' deleteAction={ this.handleDelete }/>
            </Popover>
          </div>
        </div>

        <CardsIndexContainer listId={ list.id } />
      </div>
    );
  }
}

export default DragSource(ItemTypes.LIST, listSource, collect)(List);
