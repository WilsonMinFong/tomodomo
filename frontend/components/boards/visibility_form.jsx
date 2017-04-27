import React from 'react';

class VisibilityForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      private: props.board.private
    };

    this.handlePrivacyChange = this.handlePrivacyChange.bind(this);
  }

  handlePrivacyChange(value) {
    return (e) => {
      const privacyVal = value;

      if (privacyVal !== this.state.private) {
        this.setState({ private: privacyVal });
        this.props.updateBoard(Object.assign(this.props.board, { private: privacyVal }));
      }
    };
  }

  render() {
    const checkIcon = (
      <i className="fa fa-check" aria-hidden="true"/>
    );

    return (
      <div className='visibility-form'>
        <ul>
          <li onClick={ this.handlePrivacyChange(true) }>
            <div className='visibility-item-header'>
              <i className="fa fa-lock" aria-hidden="true"></i>
              Private
              { this.state.private ? checkIcon : '' }
            </div>
            <div className='visibility-item-description'>
              This board is private. Only people added to the board can
              view and edit it.
            </div>
          </li>

          <li onClick={ this.handlePrivacyChange(false) }>
            <div className='visibility-item-header'>
              <i className="fa fa-globe" aria-hidden="true"></i>
              Public
              { this.state.private ? '' : checkIcon }
            </div>
            <div className='visibility-item-description'>
              This board is public. It is visible to anyone with the
              link.  Only people added to the board can edit it.
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default VisibilityForm;
