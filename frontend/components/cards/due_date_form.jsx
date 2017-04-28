import React from 'react';
import moment from 'moment';

class DueDateForm extends React.Component {
  constructor(props) {
    super(props);

    if (props.card) {
      const dateTime = moment(props.card.due_date);

      if (dateTime.isValid()) {
        const date = dateTime.format('YYYY-MM-DD');
        const time = dateTime.format('HH:mm');
        this.state = {
          date,
          time
        };
      }
    }

    if (!this.state) {
      this.state = {
        date: '',
        time: ''
      };
    }

    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemoveDueDate = this.handleRemoveDueDate.bind(this);
  }

  updateInput(attr) {
    return (e) => {
      this.setState({ [attr]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    const { card, updateCard, removeAllPopovers } = this.props;
    const { date, time } = this.state;

    const formattedDateTime = moment(
      `${date} ${time}`,
      'YYYY-MM-DD HH:mm'
    ).format();

    updateCard({
      id: card.id,
      due_date: formattedDateTime
    }).then(() => removeAllPopovers());
  }

  handleRemoveDueDate() {
    const { card, updateCard, removeAllPopovers } = this.props;

    updateCard({
      id: card.id,
      due_date: null
    }).then(() => removeAllPopovers());
  }

  render() {
    return (
      <div className='due-date-form'>
        <h1>Change Due Date</h1>
        <form onSubmit={ this.handleSubmit }>
          <input
            type='date'
            value={ this.state.date }
            onChange={ this.updateInput('date') } />

          <input
            type='time'
            value={ this.state.time }
            onChange={ this.updateInput('time') } />

          <div className='due-date-form-actions'>
            <input
              type='submit'
              value='Save' />
            <input
              type='button'
              onClick={ this.handleRemoveDueDate }
              value='Remove' />
          </div>
        </form>
      </div>
    );
  }
}

export default DueDateForm;
