import React from 'react';
import Popover from '../shared/popover';
import BoardsIndexItem from './board_index_item';
import BoardFormContainer from './board_form_container';

class BoardsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.togglePopover = this.togglePopover.bind(this);
  }

  componentDidMount() {
    this.props.fetchBoards();
  }

  togglePopover(name) {
    return (e) => {
      e.stopPropagation();
      this.props.receivePopover(name);
    };
  }

  render() {
    const { personalBoards, sharedBoards, menu } = this.props;

    let createBoardButton = (
      <li className='popover-container'>
        <button onClick={ this.togglePopover('index-board-form') } className='index-board-form'>
          Create a new board...
        </button>
        <Popover name='index-board-form'>
          <BoardFormContainer formType='new'/>
        </Popover>
      </li>
    );

    if (menu) {
      createBoardButton = null;
    }

    const personalBoardLis = personalBoards.map((board) => <BoardsIndexItem key={ board.id } board={ board } />);
    const sharedBoardLis = sharedBoards.map((board) => <BoardsIndexItem key={ board.id } board={ board } />);

    return (
      <div className='boards-index'>
        <h1>
          <i className="fa fa-user" aria-hidden="true"></i>
          Personal Boards
        </h1>
        <ul className='boards-list'>
          { personalBoardLis }
          { createBoardButton }
        </ul>
        <h1>
          <i className="fa fa-users" aria-hidden="true"></i>
          Shared Boards
        </h1>
        <ul className='boards-list'>
          { sharedBoardLis }
        </ul>
      </div>
    );
  }
}

export default BoardsIndex;
