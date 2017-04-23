import React from 'react';

class List extends React.Component {
  render() {
    const { list } = this.props;

    return (
      <span>
        { list.name }
      </span>
    );
  }
}

export default List;
