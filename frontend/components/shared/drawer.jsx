import React from 'react';

const Drawer = ({ open, children }) => {
  const drawerClass = open ? 'drawer-open' : 'drawer-closed';

  return (
    <div className={ drawerClass }>
      {children}
    </div>
  );
};

export default Drawer;
