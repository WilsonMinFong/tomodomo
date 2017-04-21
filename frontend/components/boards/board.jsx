import React from 'react';
import { hashHistory } from 'react-router';

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount() {
    this.props.fetchBoard(this.props.params.boardId);
  }

  handleDelete() {
    this.props.deleteBoard().then(() => {
      hashHistory.push('/');
    });
  }

  render() {
    if (this.props.board === undefined) {
      return null;
    } else {
      return (
        <div className='board'>
          <header>
            <span>{ this.props.board.name }</span>
            <button onClick={ this.handleDelete }>Delete board...</button>
          </header>
        </div>
      );
    }
  }
}

export default Board;
