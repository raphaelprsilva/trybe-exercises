import React, { Component } from 'react';

class ProfessionalForm extends Component {
  render() {
    const { handleChange } = this.props;

    return (
      <fieldset>
        <legend>Informações Profissionais</legend>
        <label htmlFor="resume">
          Resumo do Currículo:
          <textarea
            name="curriculo"
            id="resume"
            maxLength="1000"
            required
            onChange={ handleChange }
          />
        </label>

        <label htmlFor="cargo">
          Cargo:
          <textarea
            name="cargo"
            id="cargo"
            maxLength="40"
            required
            onChange={ handleChange }
            onMouseEnter={ () => {
              alert('Preencha com cuidado, esta informação.');
            } }
          />
        </label>

        <label htmlFor="descricaoCargo">
          Descrição do Cargo:
          <textarea
            name="descricaoCargo"
            id="descricaoCargo"
            maxLength="500"
            required
            onChange={ handleChange }
          />
        </label>
      </fieldset>
    );
  }
}

export default ProfessionalForm;