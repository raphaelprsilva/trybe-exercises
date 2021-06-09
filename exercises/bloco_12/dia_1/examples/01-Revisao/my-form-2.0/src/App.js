import React, { Component } from 'react';
import Form from './Form';
import FormDataDisplay from './FormDataDisplay';

const INITIAL_STATE = {
  nome: '',
  email: '',
  cpf: '',
  endereco: '',
  cidade: '',
  estado: '',
  tipoDeEndereco: '',
  curriculo: '',
  cargo: '',
  descricaoCargo: '',
  enviado: false,
};

class App extends Component {
  constructor(props) {
    super(props);

    // bind(this) é desnecessário, pois os métodos, estão como 'arrow function'
    // this.handleChange = this.handleChange.bind(this);
    // this.updateState = this.updateState.bind(this);
    // this.validateAddress = this.validateAddress.bind(this);

    this.state = INITIAL_STATE;
  }

  // Quando eu utilizo um método com uma arrow function, o uso do 'bind' é dispensado
  handleChange = event => {
    let { name, value } = event.target;

    if (name === 'nome') value = value.toUpperCase();
    if (name === 'endereco') value = this.validateAddress(value);

    this.updateState(name, value);
  }

  onBlurHandler = event => {
    let { name, value } = event.target;

    if (name === 'cidade') value = value.match(/^\d/) ? '' : value;

    this.updateState(name, value);
  }

  // Do jeito como estava anteriormente, a linha 29, não reconhecia o método
  // 'validateAddress', e atribuía ao 'value', undefined.
  // Maneira anterior: 
  /*   validateAddress = address => { 
    address.replace(/[^\w\s]/gi, '');
  }
  */
 validateAddress = address => address.replace(/[^\w\s]/gi, '');

 updateState (name, value) {
   this.setState({
     [name]: value
   });
 }

 resetForm = () => { this.setState(INITIAL_STATE) };

 sendForm = () => { this.setState({ enviado: true }) };

  render() {
    const { enviado } = this.state;

    return (
      <main>
        <Form
          handleChange={ this.handleChange }
          onBlurHandler= { this.onBlurHandler }
          currentState={ this.state }
          resetForm= { this.resetForm }
          sendForm = { this.sendForm }
        />
        { enviado && <FormDataDisplay currentState={ this.state } />}
      </main>
    );
  }
}

export default App;
