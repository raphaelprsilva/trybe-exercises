import React, { Component } from 'react';
import PersonalForm from './PersonalForm';
import ProfessionalForm from './ProfessionalForm';

class Form extends Component {
  render() {
    const { handleChange, onBlurHandler, sendForm, currentState, resetForm, handleSubmit } = this.props;

    return (
      <form onSubmit={ handleSubmit }>
        <PersonalForm
          handleChange={ handleChange }
          onBlurHandler={ onBlurHandler }
          currentState={ currentState }
        />
        <ProfessionalForm handleChange={ handleChange } />
        <input
          type="submit"
          value="Enviar"
          onClick={ sendForm }
        />
        <input
          type="reset"
          value="Limpar"
          onClick={ resetForm }
        />
      </form>
    );
  }
}

export default Form;