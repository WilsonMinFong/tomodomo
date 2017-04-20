import React from 'react';
import Modal from 'react-modal';
import BoardsIndexItem from './board_index_item';
import BoardFormContainer from './board_form_container';

const customStyles = {
  overlay : {
    backgroundColor: 'rgba(255, 255, 255, 0)'
  },
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class BoardsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  componentDidMount() {
    this.props.fetchBoards();
  }

  render() {
    const { boards } = this.props;

    const lis = boards.map((board) => <BoardsIndexItem key={ board.id } board={ board } />);

    return (
      <div className='boards-index'>
        <h1>
          <i className="fa fa-user" aria-hidden="true"></i>
          Personal Boards
        </h1>
        <ul className='boards-list'>
          { lis }
          <li><button onClick={ this.openModal }>Create a new board...</button></li>
        </ul>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          contentLabel="Create Board"
          style={customStyles}
        >
          <BoardFormContainer onSubmit={ this.closeModal }/>
        </Modal>
      </div>
    );
  }
}

export default BoardsIndex;
