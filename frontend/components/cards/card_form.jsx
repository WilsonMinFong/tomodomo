import React from 'react';
import moment from 'moment';

class CardForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.card ? props.card.name : '',
      description: props.card ? props.card.description : '',
      activeDescription: false,
      completed: props.card ? props.card.completed : false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.toggleDescription = this.toggleDescription.bind(this);
    this.handleDescriptionSubmit = this.handleDescriptionSubmit.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    if (this.props.formType === 'new') {
      document.getElementById('card-name-input').focus();
    }
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
      e.currentTarget.blur();
    }
  }

  toggleDescription(e) {
    if (e.currentTarget.id !== 'update-description-form') {
      this.setState({ activeDescription: !this.state.activeDescription });
    }
  }

  toggleCompleted(e) {
    this.setState({ completed: !this.state.completed }, () => {
      const card = {
        id: this.props.card.id
      };

      this.props.formAction(Object.assign(card, this.state));
    });
  }

  handleDescriptionSubmit(e) {
    this.handleSubmit(e);
    this.toggleDescription(e);
  }

  render() {
    const { formType, list, readOnly, card } = this.props;

    const createForm = (
      <form onSubmit={ this.handleSubmit }>
        <textarea
          id='card-name-input'
          type='text'
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
            disabled={ readOnly }
            />
          <div className='name-subtitle'>
            in list <strong>{ list.name }</strong>
          </div>
        </div>

      </header>
    );

    let dueDateButton;

    if (card && card.due_date) {
      const dateTime = moment(card.due_date);

      dueDateButton = (
        <div className='due-date-checkbox'>
          <label>
            Due Date
          </label>
          <button
            onClick={ readOnly ? null : this.toggleCompleted }
            className={ this.state.completed ? 'completed' : null }>
            <i className="fa fa-calendar-check-o" aria-hidden="true" />
            { dateTime.format("MMM D [at] h:mm A") }
          </button>
        </div>
      );
    }


    const updateDescription = (
      <div className='description'>
        <label>
          Description
        </label>
        <form
          id='update-description-form'
          onSubmit={ this.handleDescriptionSubmit }
        >
          <textarea
            onChange={ this.handleInput('description') }
            onFocus={ this.toggleDescription }
            onBlur={ this.handleDescriptionSubmit }
            value={ this.state.description }
            placeholder={ readOnly ? '' : 'Add a description...' }
            disabled={ readOnly }
          />
        </form>
      </div>
    );

    const updateInput = (
      <div className='update-card'>
        { updateHeader }
        { dueDateButton ? dueDateButton : null }
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
