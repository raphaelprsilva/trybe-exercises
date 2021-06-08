import React, { Component } from 'react';

class Email extends Component {
  render() {
    const { emailState, handleChange } = this.props;
    return (
      <label htmlFor="emailID">
        E-mail
        <input
          type="email"
          name="email"
          value={ emailState }
          onChange={ handleChange }
          maxLength="50"
          required
          id="emailID"
        />
      </label>
    );
  }
}

export default Email;