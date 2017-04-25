import React from 'react';

class CardForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.card ? props.card.name : '',
      description: props.card ? props.card.description : '',
      activeDescription: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.toggleDescription = this.toggleDescription.bind(this);
    this.handleDescriptionSubmit = this.handleDescriptionSubmit.bind(this);
  }

  handleInput(attr) {
    return (e) => this.setState({ [attr]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    let card = Object.assign(
      {},
      this.state,
      { list_id: this.props.list.id }
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

  toggleDescription(e) {
    this.setState({ activeDescription: !this.state.activeDescription });
  }

  handleDescriptionSubmit(e) {
    this.handleSubmit(e);
    this.toggleDescription(e);
  }

  render() {
    const { formType, list } = this.props;

    const createForm = (
      <form onSubmit={ this.handleSubmit }>
        <textarea
          value={ this.state.name }
          onChange={ this.handleInput('name') }
          onKeyDown={ this.handleKeyDown }
        />

        <input type='submit' value='Add' className='button save-card'/>
      </form>
    );

    const updateHeader = (
      <header>
        <div className='name'>
          <input
            type='text'
            value={ this.state.name}
            onChange={ this.handleInput('name') }
            onBlur={ this.handleSubmit }
            onKeyDown={ this.handleKeyDown }
            className='name-input'
            />
          <div className='name-subtitle'>
            in list <strong>{ list.name }</strong>
          </div>
        </div>

      </header>
    );

    const updateDescription = (
      <div className='description'>
        <label>
          Description
        </label>
        <form
          className={ this.state.activeDescription ? 'shown' : 'hidden' }
          onSubmit={ this.handleDescriptionSubmit }
        >
          <textarea
            onFocus={ this.toggleDescription }
            onChange={ this.handleInput('description') }
            value={ this.state.description }
            placeholder='Add a description...'
          />

        <input
          type='submit'
          className={ this.state.activeDescription ? 'shown button' : 'hidden button' }
        />
        </form>
      </div>
    );

    const updateInput = (
      <div className='update-card'>
        { updateHeader }
        { updateDescription }
      </div>
    );

    return (
      <div className='card-form'>
        { formType === 'new' ? createForm : updateInput }
      </div>
    );
  }
}

export default CardForm;
