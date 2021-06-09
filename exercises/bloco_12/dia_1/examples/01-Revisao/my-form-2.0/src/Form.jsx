import React, { Component } from 'react';
import PersonalForm from './PersonalForm';
import ProfessionalForm from './ProfessionalForm';

class Form extends Component {
  render() {
    const { handleChange, onBlurHandler, sendForm, currentState, resetForm } = this.props;

    return (
      <form>
        <PersonalForm
          handleChange={ handleChange }
          onBlurHandler={ onBlurHandler }
          currentState={ currentState }
        />
        <ProfessionalForm handleChange={ handleChange } />
        <input
          type="button"
          value="Enviar"
          onClick={ sendForm }
        />
        <input
          type="button"
          value="Limpar"
          onClick={ resetForm }
        />
      </form>
    );
  }
}

export default Form;