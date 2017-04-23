import React from 'react';

class ListForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.list ? props.list.name : '',
      focus: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.toggleFocus = this.toggleFocus.bind(this);
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
          this.setState({ name: '' });
        }
      }
    );
  }

  handleKeyDown(e) {
    if (e.key === 'Enter') {
      this.handleSubmit(e);
    }
  }

  toggleFocus(e) {
    const focus = this.state.focus === '' ? 'focus' : '';
    this.setState({ focus });
  }

  render() {
    const { formType } = this.props;

    const createForm = (
      <form onSubmit={ this.handleSubmit }>
        <input
          type='text'
          value={ this.state.name }
          onChange={ this.handleInput }
          placeholder='Add a list...'/>

        <input type='submit' value='Save' className='button'/>
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
      <div className={`list-form ${this.state.focus}`} onFocus={ this.toggleFocus } onBlur={ this.toggleFocus }>
        { formType === 'new' ? createForm : updateInput }
      </div>
    );
  }
}

export default ListForm;
