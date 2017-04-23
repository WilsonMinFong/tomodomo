import React from 'react';
import List from './list';

class ListsIndexItem extends React.Component {
  render() {
    const { list } = this.props;

    return (
      <li>
        <List list={ list }/>
      </li>
    );
  }
}

export default ListsIndexItem;
