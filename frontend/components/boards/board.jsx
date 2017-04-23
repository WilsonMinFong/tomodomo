import React from 'react';
import { hashHistory } from 'react-router';
import Popover from '../shared/popover';
import BoardFormContainer from './board_form_container';
import ListsIndexContainer from '../lists/lists_index_container';

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchBoard(this.props.params.boardId);
  }

  componentWillReceiveProps() {
    if (this.props.board &&
      this.props.board.id !== parseInt(this.props.params.boardId))
    {
      this.props.fetchBoard(this.props.params.boardId);
    }
  }

  handleDelete() {
    this.props.deleteBoard().then(() => {
      hashHistory.push('/');
    });
  }

  togglePopover(name) {
    return (e) => {
      e.stopPropagation();
      this.props.receivePopover(name);
    };
  }

  render() {
    if (this.props.board === undefined) {
      return null;
    } else {
      return (
        <div className='board'>
          <header>
            <div className='popover-container'>
              <button onClick={ this.togglePopover('update-board') } className='name update-board'>
                { this.props.board.name }
              </button>
              <Popover name='update-board'>
                <BoardFormContainer formType='update' board={ this.props.board }/>
              </Popover>
            </div>
            <button onClick={ this.handleDelete }>Delete board...</button>
          </header>

          <section className='lists-index'>
            <ListsIndexContainer />
          </section>
        </div>
      );
    }
  }
}

export default Board;
