import React from 'react';

import ListsIndexItem from './lists_index_item';
import ListFormContainer from './list_form_container';

class ListsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchLists(this.props.params.boardId);
  }

  render() {
    const { lists } = this.props;

    const listLis = lists.map(
      (list, i) => <ListsIndexItem
        key={ list.id }
        list={ list }
        ord={ i }
      />
    );

    return (
      <ol>
        { listLis }
        <li><ListFormContainer formType='new'/></li>
      </ol>
    );
  }
}

export default ListsIndex;
