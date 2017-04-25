import React from 'react';
import Modal from 'react-modal';
import { hashHistory } from 'react-router';


class Card extends React.Component {
  constructor(props) {
    super(props);

    this.closeModal = this.closeModal.bind(this);

    const appElement = document.body;
    Modal.setAppElement(appElement);
  }

  closeModal() {
    hashHistory.push(`/boards/${this.props.boardId}`);
  }

  render() {
    const { card } = this.props;
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
            { card.name }
          </Modal>
        </div>
      );
    }
  }
}

export default Card;
