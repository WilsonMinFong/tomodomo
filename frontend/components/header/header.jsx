import React from 'react';

import Drawer from '../shared/drawer';
import UserMenu from './user_menu';
import Logo from '../shared/logo';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userMenuOpen: false
    };

    this.toggleUserDrawer = this.toggleUserDrawer.bind(this);
    this.closeUserDrawer = this.closeUserDrawer.bind(this);
  }

  toggleUserDrawer() {
    this.setState({ userMenuOpen: !this.state.userMenuOpen });
  }

  closeUserDrawer() {
    this.setState({userMenuOpen: false});
  }

  render() {
    const { currentUser, logout } = this.props;

    return (
      <div className='header-container'>
        <header>
          <div>
          </div>
          <Logo />
          <nav>
            <button onClick={ this.toggleUserDrawer }>
              { currentUser.name }
            </button>
          </nav>
          <Drawer open={ this.state.userMenuOpen }>
            <UserMenu currentUser={ currentUser } logout={ logout }/>
          </Drawer>
        </header>
      </div>
    );
  }
}

// <Modal
// isOpen={ this.state.userMenuOpen }
// onRequestClose={ this.closeUserDrawer }
// contentLabel='User Menu'
// shouldCloseOnOverlayClick={false}
// >
// </Modal>
export default Header;
