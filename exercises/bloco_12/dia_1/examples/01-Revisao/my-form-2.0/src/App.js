import React, { Component } from 'react';
import Form from './Form';

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  endereco: '',
  cidade: '',
  estado: '',
  tipoDeEndereco: '',
};

class App extends Component {
  constructor(props) {
    super(props);

    // this.handleChange = this.handleChange.bind(this);
    // this.updateState = this.updateState.bind(this);
    // this.validateAddress = this.validateAddress.bind(this);

    this.state = INITIAL_STATE;
  }

  handleChange = event => {
    let { name, value } = event.target;
    if (name === 'endereco') {
      value = this.validateAddress(value);
    }

    this.updateState(name, value);
  }


  updateState = (name, value) => {
    this.setState({
      [name]: value
    });
  }

  validateAddress = address => {
    address.replace(/[^\w\s]/gi, '');
  }

  render() {
    return (
      <main>
        <Form
          handleChange={ this.handleChange }
        />
      </main>
    );
  }
}

export default App;
