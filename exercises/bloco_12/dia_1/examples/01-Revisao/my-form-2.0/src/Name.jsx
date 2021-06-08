import React, { Component } from 'react';

class Name extends Component {
  render() {
    const { nameState, handleChange } = this.props;

    return (
      <label htmlFor="name">
        Nome
        <input
          type="text"
          name="name"
          value={ nameState }
          onChange={ handleChange }
          id="name"
          required
          maxLength="50"
        />
      </label>
    );
  }
}

export default Name;