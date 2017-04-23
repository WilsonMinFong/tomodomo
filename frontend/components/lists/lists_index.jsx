import React from 'react';

import ListsIndexItem from './lists_index_item';
import ListFormContainer from './list_form_container';
import Popover from '../shared/popover';

class ListsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.togglePopover = this.togglePopover.bind(this);
  }

  componentDidMount() {
    this.props.fetchLists(this.props.params.boardId);
  }

  togglePopover(name) {
    return (e) => {
      e.stopPropagation();

      if (!e.nativeEvent.path.includes(document.getElementsByClassName('popover')[0])) {
        this.props.receivePopover(name);
      }
    };
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

        <li className='popover-container list-create-li lists-index-form' onClick={ this.togglePopover('lists-index-form') }>
          <div className='placeholder'>
            Add a list...
          </div>
          <Popover name='lists-index-form'>
            <ListFormContainer formType='new'/>
          </Popover>
        </li>

      </ol>
    );
  }
}
// <li className='list-create-li'>
//   <Popover>
//     <FormContainer formType='new'/>
//   </Popover>
// </li>

export default ListsIndex;
