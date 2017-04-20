import React from 'react';

import Drawer from '../shared/drawer';
import UserMenu from './user_menu';
import Logo from '../shared/logo';
import Popover from '../shared/popover';
import BoardsIndexContainer from '../boards/boards_index_container';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.togglePopover = this.togglePopover.bind(this);
  }

  togglePopover(name) {
    return () => {
      this.props.receivePopover(name);
    };
  }

  render() {
    const { currentUser, logout } = this.props;

    return (
      <div className='header-container'>
        <header>
          <nav>
            <button onClick={ this.togglePopover('boards-index-drawer')}>
              Boards
            </button>
            <Popover name='boards-index-drawer'>
              <BoardsIndexContainer />
            </Popover>
          </nav>

          <Logo />

          <nav>
            <div>
              <button onClick={ this.togglePopover('create-drawer') }>
                +
              </button>
              <Popover name='create-drawer'>
                Popover content
              </Popover>
            </div>
            <div>
              <button onClick={ this.togglePopover('user-drawer') }>
                { currentUser.name }
              </button>
              <Popover name='user-drawer'>
                <UserMenu currentUser={ currentUser } logout={ logout }/>
              </Popover>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
