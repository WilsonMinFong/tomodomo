import React from 'react';

class CardForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.card ? props.card.name : ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleInput(e) {
    this.setState({ name: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    let card = Object.assign(
      {},
      this.state,
      { list_id: this.props.listId }
    );

    if (this.props.card) {
      card = Object.assign(card, { id: this.props.card.id });
    }

    this.props.formAction(card).then(
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
        <textarea
          value={ this.state.name }
          onChange={ this.handleInput }
          onKeyDown={ this.handleKeyDown }
        />

        <input type='submit' value='Add' className='button save-card'/>
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
      <div className='card-form'>
        { formType === 'new' ? createForm : updateInput }
      </div>
    );
  }
}

export default CardForm;
