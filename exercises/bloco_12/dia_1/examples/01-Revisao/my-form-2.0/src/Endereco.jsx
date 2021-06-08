import React, { Component } from 'react';

class Endereco extends Component {
  render() {
    const { addressState, handleChange } = this.props;
    return (
      <label htmlFor="enderecoID">
        Endereço:
        <input
          type="text"
          name="endereco"
          value={ addressState }
          onChange={ handleChange }
          maxLength="200"
          id="enderecoID"
          required
          />
      </label>
    );
  }
}

export default Endereco;