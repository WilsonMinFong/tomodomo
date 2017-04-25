import React from 'react';
import CardsIndexItem from './cards_index_item';
import CardFormContainer from './card_form_container';
import Popover from '../shared/popover';
import { ItemTypes } from '../../util/constants';
import { DragSource, DropTarget } from 'react-dnd';

// for react-dnd
const cardTarget = {
  hover(props, monitor, component) {
    const dragCard = monitor.getItem();
    const hoverList = props.listId;

    if (dragCard.list_id !== hoverList) {
      const card = Object.assign({}, monitor.getItem(), { list_id: hoverList });
      props.updateCard(card);

      monitor.getItem().list_id = hoverList;
    }
  },
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget()
  };
}

class CardsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.togglePopover = this.togglePopover.bind(this);
  }

  componentWillMount() {
    this.props.fetchCards();
  }

  togglePopover(name) {
    return (e) => {
      e.stopPropagation();

      if (!e.nativeEvent.path.includes(document.getElementsByClassName('popover')[0])) {
        this.props.receivePopover(name);
      }
    };
  }

  render() {
    const { cards, listId, updateCard, connectDropTarget } = this.props;

    return connectDropTarget(
      <div className='cards-index-container'>
        <ul className='cards-index'>
          { cards.map((card) =>
            <CardsIndexItem
              key={ card.id }
              card={ card }
              updateCard={ updateCard }/>)
          }
        </ul>

        <div className='popover-container'>
          <div
            className='create-card-button popover-container'
            onClick={ this.togglePopover(`create-card-form-${listId}`)}
          >
            Add a card...
          </div>
          <Popover name={`create-card-form-${listId}`}>
            <CardFormContainer formType='new' listId={ listId }/>
          </Popover>
        </div>
      </div>
    );
  }
}

export default DropTarget(
  ItemTypes.CARD,
  cardTarget,
  collect
)(CardsIndex);
