import React from 'react';
import ListContainer from './list_container';

class ListsIndexItem extends React.Component {
  render() {
    const { list } = this.props;

    return (
      <li>
        <ListContainer list={ list }/>
      </li>
    );
  }
}

export default ListsIndexItem;
