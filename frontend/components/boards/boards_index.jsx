import React from 'react';
import BoardsIndexItem from './board_index_item'

class BoardsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchBoards();
  }

  render() {
    const { boards } = this.props;

    const lis = boards.map((board) => <BoardsIndexItem key={ board.id } board={ board } />);

    return (
      <ul className='boards-index'>
        { lis }
      </ul>
    );
  }
}

export default BoardsIndex;
