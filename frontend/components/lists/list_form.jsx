import React from 'react';

class ListForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.list ? props.list.name : ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({ name: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    let list = Object.assign({}, this.state, { board_id: this.props.params.boardId});

    if (this.props.list) {
      list = Object.assign(list, { id: this.props.list.id });
    }

    this.props.formAction(list);
  }

  render() {
    const { formType } = this.props;

    let action = 'Create';

    if (formType !== 'new') {
      action = 'Rename';
    }

    return (
      <div className='list-form'>
        <form onSubmit={ this.handleSubmit }>
          <label>Name
            <input type='text' value={ this.state.name } onChange={ this.handleInput }/>
          </label>

          <input type='submit' value={ action } className='button'/>
        </form>
      </div>
    );
  }
}

export default ListForm;
