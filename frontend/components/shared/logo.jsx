import React from 'react';
import { Link } from 'react-router';

const Logo = (props) => {
  return (
    <div className='logo' >
      <Link to='/'>
        <i className="fa fa-users" aria-hidden="true"></i>
         Tomodomo
      </Link>
    </div>
  );
};

export default Logo;
