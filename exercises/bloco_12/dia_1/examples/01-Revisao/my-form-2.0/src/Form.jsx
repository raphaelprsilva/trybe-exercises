import React, { Component } from 'react';
import Email from './Email';
import Endereco from './Endereco';
import Name from './Name';

class Form extends Component {

  render() {
    const { addressState, handleChange } = this.props;
    return (
      <div>
        <form>
          <fieldset>
            <legend>Dados Pessoais</legend>
            <Name
              // value={ this.state.name }
              handleChange={ handleChange }
            />
            <Email
              // value={ this.state.email }
              handleChange={ handleChange }
            />
            <Endereco
              value= { addressState }
              handleChange={ handleChange }
            />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Form;