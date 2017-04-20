import React from 'react';
import Popover from '../shared/popover';
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

    this.togglePopover = this.togglePopover.bind(this);
  }

  componentDidMount() {
    this.props.fetchBoards();
  }

  togglePopover(name) {
    return () => {
      this.props.receivePopover(name);
    };
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
          <li>
            <button onClick={ this.togglePopover('index-board-form') }>Create a new board...</button>
            <Popover name='index-board-form'>
              <BoardFormContainer />
            </Popover>
          </li>
        </ul>
      </div>
    );
  }
}

export default BoardsIndex;
