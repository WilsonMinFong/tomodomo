import React from 'react';

import Drawer from '../shared/drawer';
import UserMenu from './user_menu';
import Logo from '../shared/logo';
import Popover from '../shared/popover';
import BoardsIndexContainer from '../boards/boards_index_container';
import CreateMenu from './create_menu';
import AppInfo from './app_info';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.togglePopover = this.togglePopover.bind(this);
  }

  togglePopover(name) {
    return (e) => {
      e.stopPropagation();
      this.props.receivePopover(name);
    };
  }

  render() {
    const { currentUser, logout } = this.props;

    return (
      <div className='header-container'>
        <header>
          <nav>
            <button onClick={ this.togglePopover('boards-index-drawer')} className='boards-index-drawer'>
              Boards
            </button>
            <Popover name='boards-index-drawer'>
              <BoardsIndexContainer menu={ true }/>
            </Popover>
          </nav>

          <Logo />

          <nav>
            <div>
              <button onClick={ this.togglePopover('create-drawer') } className='create-drawer'>
                <i className="fa fa-plus" aria-hidden="true"></i>
              </button>
              <Popover name='create-drawer'>
                <CreateMenu />
              </Popover>
            </div>
            <div>
              <button onClick={ this.togglePopover('user-drawer') } className='user-drawer'>
                { currentUser.name }
              </button>
              <Popover name='user-drawer'>
                <UserMenu currentUser={ currentUser } logout={ logout }/>
              </Popover>
            </div>
            <div>
              <button onClick={ this.togglePopover('info-drawer') } className='info-drawer'>
                <i className="fa fa-info-circle" aria-hidden="true"></i>
              </button>
              <Popover name='info-drawer'>
                <AppInfo />
              </Popover>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
