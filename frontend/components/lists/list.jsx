import React from 'react';

import ListFormContainer from './list_form_container';

class List extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.deleteList(this.props.list.id);
  }

  render() {
    const { list } = this.props;

    return (
      <div className='list-container'>
        <ListFormContainer formType='update' list={ list }/>
        <button onClick={ this.handleDelete }>Delete list...</button>
      </div>
    );
  }
}

export default List;
