import React from 'react';
import Modal from 'react-modal';
import { hashHistory } from 'react-router';
import CardFormContainer from './card_form_container';

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.closeModal = this.closeModal.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    const appElement = document.body;
    Modal.setAppElement(appElement);
  }

  closeModal() {
    hashHistory.push(`/boards/${this.props.boardId}`);
  }

  handleDelete() {
    this.props.deleteCard(this.props.card.id)
      .then(() => hashHistory.push(`/boards/${this.props.boardId}`));
  }

  render() {
    const { card, list, deleteCard } = this.props;
    if (!card) {
      return null;
    } else {
      return (
        <div className='card'>
          <Modal
            isOpen={ true }
            onRequestClose={this.closeModal}
            contentLabel="Card Modal"
          >
            <CardFormContainer formType='update' card={ card } listId={ list.id } />
            <button onClick={ this.handleDelete }>Delete</button>
          </Modal>
        </div>
      );
    }
  }
}

export default Card;
