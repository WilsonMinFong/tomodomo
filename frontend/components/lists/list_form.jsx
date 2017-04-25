import React from 'react';

class ListForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.list ? props.list.name : ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    if (this.props.formType === 'new') {
      document.getElementById('list-name-input').focus();
    }
  }

  handleInput(e) {
    this.setState({ name: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    let list = Object.assign(
      {},
      this.state,
      { board_id: this.props.params.boardId }
    );

    if (this.props.list) {
      list = Object.assign(list, { id: this.props.list.id });
    }

    this.props.formAction(list).then(
      () => {
        if (this.props.formType === 'new') {
          this.props.removeAllPopovers();
        }
      }
    );
  }

  handleKeyDown(e) {
    if (e.key === 'Enter') {
      this.handleSubmit(e);
    }
  }

  render() {
    const { formType } = this.props;

    const createForm = (
      <form onSubmit={ this.handleSubmit }>
        <input
          id='list-name-input'
          type='text'
          value={ this.state.name }
          onChange={ this.handleInput }
          placeholder='Add a list...'/>

        <input type='submit' value='Save' className='button save-list'/>
      </form>
    );

    const updateInput = (
      <input
        type='text'
        value={ this.state.name}
        onChange={ this.handleInput }
        onBlur={ this.handleSubmit }
        onKeyDown={ this.handleKeyDown } />
    );

    return (
      <div className='list-form'>
        { formType === 'new' ? createForm : updateInput }
      </div>
    );
  }
}

export default ListForm;
