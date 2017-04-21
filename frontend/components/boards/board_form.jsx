import React from 'react';

class BoardForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.board ? props.board.name : ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({ name: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    let board = Object.assign({}, this.state);

    if (this.props.board) {
      board = Object.assign(board, { id: this.props.board.id });
    }

    this.props.formAction(board).then(
      () => this.props.removeAllPopovers()
    );
  }

  render() {
    const { formType } = this.props;

    let action = 'Create';

    if (formType !== 'new') {
      action = 'Rename';
    }

    return (
      <div className='board-form popup'>
        <span>{ `${action} Board` }</span>
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

export default BoardForm;
