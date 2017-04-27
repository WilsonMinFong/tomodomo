import React from 'react';
import ReactDateTime from 'react-datetime';

class DueDateForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      due_date: props.card ? props.card.due_date : ''
    };
  }

  render() {
    return (
      <div className='due-date-form'>
        <ReactDateTime open={ true } input={ false }/>
      </div>
    );
  }
}

export default DueDateForm;
