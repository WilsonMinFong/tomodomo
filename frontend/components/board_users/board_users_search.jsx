import React from 'react';

class BoardUsersSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    };

    this.handleInput = this.handleInput.bind(this);
  }

  componentWillUnmount() {
    this.props.removeAllSearchUsers();
  }

  handleInput(e) {
    const query = e.currentTarget.value;
    this.setState({ query });
    this.props.fetchSearchUsers(query);
  }

  render() {
    return (
      <section className='board-users-search'>
        <label>Search for users
          <input onChange={ this.handleInput } value={ this.state.query }/>
        </label>
      </section>
    );
  }
}

export default BoardUsersSearch;
