import React, { Component } from 'react';
import PersonalForm from './PersonalForm';

class Form extends Component {
  render() {
    const { handleChange } = this.props;

    return (
      <PersonalForm
        handleChange={ handleChange }
      />
    );
  }
}

export default Form;