import React from 'react';

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
        
      </div>
    );
  }
}

export default DueDateForm;
