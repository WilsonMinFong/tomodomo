import React from 'react';
import CardsIndexItem from './cards_index_item';

class CardsIndex extends React.Component {
  componentWillMount() {
    this.props.fetchCards();
  }

  render() {
    const { cards } = this.props;

    return (
      <ul className='cards-index'>
        { cards.map((card) => <CardsIndexItem key={ card.id } card={ card }/>)}
      </ul>
    );
  }
}

export default CardsIndex;
