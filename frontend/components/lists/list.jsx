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
        <button onClick={ this.handleDelete }>
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
      </div>
    );
  }
}

export default List;
