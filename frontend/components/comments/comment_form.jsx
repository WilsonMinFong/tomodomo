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
    const { currentUser } = this.props;

    return (
      <section className='comment-form'>
        <div className='user-icon'>
          <span className='initials'>
            { currentUser.name.split(' ').map((s) => s.charAt(0)).join('') }
          </span>
        </div>

        <form onSubmit={ this.handleSubmit }>
          <textarea
            value={ this.state.body }
            onChange= { this.handleInput }
            placeholder='Write a comment...' />
          <input type='submit' value='Send' className='button' />
        </form>
      </section>
    );
  }
}

export default withRouter(CommentForm);
