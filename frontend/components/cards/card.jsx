import React from 'react';
import Modal from 'react-modal';
import { hashHistory } from 'react-router';
import CardFormContainer from './card_form_container';
import Popover from '../shared/popover';
import DeleteConfirmation from '../shared/delete_confirmation';

const customStyles = {
  overlay : {
    backgroundColor   : 'rgba(0, 0, 0, 0.6)'
  },
  content : {
    border                     : 'none',
    background                 : '#EDEFF0',
    borderRadius               : '3px',
    margin: '0 auto',
    maxWidth: '720px',
    display: 'flex'
  }
};

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

  togglePopover(popover) {
    return (e) => {
      e.stopPropagation();
      this.props.receivePopover(popover);
    };
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
            style={ customStyles }
            contentLabel="Card Modal"
          >
            <div className='card-main'>
              <button onClick={ this.closeModal } className='close-modal'>
                <i className="fa fa-times" aria-hidden="true"></i>
              </button>
              <CardFormContainer formType='update' card={ card } listId={ list.id } />
            </div>
            <div className='card-sidebar'>
              <h1>Actions</h1>
              <div className='popover-container'>
                <button onClick={ this.togglePopover('delete-card') } className={'delete-card'}>
                  Delete
                </button>
                <Popover name={'delete-card'}>
                  <DeleteConfirmation objectName='card' deleteAction={ this.handleDelete }/>
                </Popover>
              </div>
            </div>
          </Modal>
        </div>
      );
    }
  }
}

export default Card;
