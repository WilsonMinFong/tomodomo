import React from 'react';
import Modal from 'react-modal';

import Drawer from '../shared/drawer';
import UserMenu from './user_menu';
import Logo from '../shared/logo';
import BoardsIndexContainer from '../boards/boards_index_container';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userMenuOpen: false,
      boardsMenuOpen: false
    };

    this.toggleUserDrawer = this.toggleUserDrawer.bind(this);
    this.closeUserDrawer = this.closeUserDrawer.bind(this);
    this.toggleBoardsDrawer = this.toggleBoardsDrawer.bind(this);
    this.closeBoardsDrawer = this.closeBoardsDrawer.bind(this);
  }

  toggleUserDrawer() {
    this.setState({ userMenuOpen: !this.state.userMenuOpen });
  }

  closeUserDrawer() {
    this.setState({userMenuOpen: false});
  }

  toggleBoardsDrawer() {
    this.setState({ boardsMenuOpen: !this.state.boardsMenuOpen });
  }

  closeBoardsDrawer() {
    this.setState({boardsMenuOpen: false});
  }

  render() {
    const { currentUser, logout } = this.props;

    return (
      <div className='header-container'>
        <header>
          <nav>
            <button onClick={ this.toggleBoardsDrawer }>
              Boards
            </button>
          </nav>
          <Logo />
          <nav>
            <button onClick={ this.toggleCreateDrawer }>
              +
            </button>
            <button onClick={ this.toggleUserDrawer }>
              { currentUser.name }
            </button>
          </nav>
          <Drawer open={ this.state.userMenuOpen }>
            <UserMenu currentUser={ currentUser } logout={ logout }/>
          </Drawer>
        </header>
        <Modal
          isOpen={this.state.boardsMenuOpen}
          onRequestClose={this.closeBoardsDrawer}
          contentLabel="Boards Header Index"
        >
          <BoardsIndexContainer onSubmit={ this.closeModal }/>
        </Modal>
      </div>
    );
  }
}

export default Header;
