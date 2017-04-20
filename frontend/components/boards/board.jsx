import React from 'react';

class Board extends React.Component {
  componentsDidMount() {

  }

  render() {
    return (
      <div>{ this.props.board.name }</div>
    );
  }
}

export default Board;
