import React from 'react';
import CardsIndexItem from './cards_index_item';
import CardFormContainer from './card_form_container';
import Popover from '../shared/popover';

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
    const { cards, listId } = this.props;

    return (
      <div className='cards-index-container'>
        <ul className='cards-index'>
          { cards.map((card) => <CardsIndexItem key={ card.id } card={ card }/>)}
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

export default CardsIndex;
