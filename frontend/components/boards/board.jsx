import React from 'react';
import { hashHistory } from 'react-router';
import Popover from '../shared/popover';
import BoardFormContainer from './board_form_container';
import ListsIndexContainer from '../lists/lists_index_container';
import BoardUsersIndexContainer from '../board_users/board_users_index_container';
import DeleteConfirmation from '../shared/delete_confirmation';
import VisibilityFormContainer from './visibility_form_container';

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchBoard(this.props.params.boardId);
    this.props.fetchBoardUsers(this.props.params.boardId);
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
    if (!this.props.readOnly) {
      return (e) => {
        e.stopPropagation();
        this.props.receivePopover(name);
      };
    }
  }

  render() {
    const { board, readOnly, currentUser } = this.props;

    if (board === undefined) {
      return null;
    } else {
      const boardNav = (
        <div className='board-actions'>
          <div className='popover-container'>
            <button onClick={ this.togglePopover('board-users-sidebar') } className='board-users-sidebar'>
              Share board...
            </button>
            <Popover name='board-users-sidebar'>
              <BoardUsersIndexContainer boardCreatorId={ board.creator_id }/>
            </Popover>
          </div>

          <div className='popover-container'>
            <button onClick={ this.togglePopover('delete-board') } className='delete-board'>
              Delete board...
            </button>
            <Popover name='delete-board'>
              <DeleteConfirmation objectName='board' deleteAction={ this.handleDelete }/>
            </Popover>
          </div>
        </div>
      );

      return (
        <div className='board'>
          <header>
            <div className='left-nav'>
              <div className='popover-container'>
                <button onClick={ this.togglePopover('update-board') } className='name update-board'>
                  { board.name }
                </button>
                <Popover name='update-board'>
                  <BoardFormContainer formType='update' board={ board }/>
                </Popover>
              </div>

              <div className='popover-container'>
                <button
                  onClick={ this.togglePopover('update-visibility') }
                  className='name update-visibility'>
                  { board.private ?
                    <i className="fa fa-lock" aria-hidden="true"/> :
                    <i className="fa fa-globe" aria-hidden="true"/> }
                  { board.private ? 'Private' : 'Public' }
                </button>
                <Popover name='update-visibility'>
                  <VisibilityFormContainer formType='update' board={ board }/>
                </Popover>
              </div>
            </div>
            { readOnly || currentUser.id !== board.creator_id ? null : boardNav }
          </header>

          <section className='lists-index'>
            <ListsIndexContainer />
          </section>

          {this.props.children}
        </div>
      );
    }
  }
}


export default Board;
