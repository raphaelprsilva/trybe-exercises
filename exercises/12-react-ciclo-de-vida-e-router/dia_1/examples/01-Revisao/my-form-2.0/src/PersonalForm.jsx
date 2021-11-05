import React, { Component } from 'react';

const states = ['Acre', 'Amapá', 'Amazonas', 'Distrito Federal', 'Espírito Santo'];

class PersonalForm extends Component {
  render() {
    const { handleChange, onBlurHandler, currentState } = this.props;
    return (
      <fieldset>
        <legend>Informações Pessoais</legend>

        <div>
          Nome:
          <input
            type="text"
            name="nome"
            required
            onChange={ handleChange }
          />
        </div>

        <div>
          Email:
          <input
            type="email"
            name="email"
            maxLength="50"
            required
            onChange={ handleChange }
          />
        </div>

        <div>
          CPF:
          <input
            type="text"
            name="cpf"
            maxLength="11"
            required
            onChange={ handleChange }
          />
        </div>

        <div>
          Endereço:
          <input
            type="text"
            name="endereco"
            maxLength="200"
            required
            onChange= { handleChange }
          />
        </div>

        <div>
          Cidade:
          <input
            type="text"
            name="cidade"
            required
            value={ currentState.cidade }
            onChange={ handleChange }
            onBlur ={ onBlurHandler }
          />
        </div>

        <div>
          Estado:

          <select
            name="estado"
            required
            onChange={ handleChange }
            defaultValue=""
          >
            <option value="">Selecione</option>
            {
              states.map((estado, key) => (
                <option key={ key }>{ estado }</option>
              ))
            }
          </select>
        </div>

        <div>
          <label htmlFor="casa">
            <input
              type="radio"
              name="tipoDeEndereco"
              id="casa"
              value="casa"
              onChange={ handleChange }
            />
            Casa
          </label>

          <label htmlFor="apartamento">
            <input
              type="radio"
              name="tipoDeEndereco"
              id="apartamento"
              value="apartamento"
              onChange={ handleChange }
            />
            Apartamento
          </label>
        </div>

      </fieldset>
    );
  }
}

export default PersonalForm;