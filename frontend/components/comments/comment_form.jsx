import React from 'react';
import { withRouter } from 'react-router';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: ''
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    this.setState({ body: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    
    const cardId = this.props.params.cardId;
    const comment = Object.assign(this.state, { card_id: cardId });
    this.props.createComment(comment);
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <textarea
          value={ this.state.body }
          onChange= { this.handleInput }
          placeholder='Write a comment...' />
        <input type='submit' value='Send' />
      </form>
    );
  }
}

export default withRouter(CommentForm);
