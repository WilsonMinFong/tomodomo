import React from 'react';

class BoardForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({ name: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.createBoard(this.state).then(
      () => this.props.onSubmit()
    );
  }

  render() {
    return (
      <div className='board-form popup'>
        <span>Create Board</span>
        <form onSubmit={ this.handleSubmit }>
          <input type='text' value={ this.state.name } onChange={ this.handleInput }/>

          <input type='submit' value='Create' className='button'/>
        </form>
      </div>
    );
  }
}

export default BoardForm;
