import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerClient } from '../redux/actions';

class RegistredCostumers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      age: '',
      email: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.validateClient = this.validateClient.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  validateClient() {
    const { registerNewClient } = this.props;
    registerNewClient(this.state);
    this.setState({
      name: '',
      age: '',
      email: '',
    });
  }

  render() {
    const { user } = this.props;
    const { name, age, email } = this.state;

    if (!user.email) return <h2>Login não efetuado!</h2>;

    return (
      <div>
        <div>
          Registrar Novo Cliente
        </div>
        <label htmlFor="name">
          Nome:
          <input
            type="text"
            name="name"
            placeholder="Nome Completo"
            value={ name }
            onChange={ this.handleChange }
            required
          />
        </label>
        <label htmlFor="age">
          Idade:
          <input
            type="number"
            name="age"
            placeholder="Idade"
            value={ age }
            onChange={ this.handleChange }
            required
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            name="email"
            placeholder="nome@gmail.com"
            value={ email }
            onChange={ this.handleChange }
            required
          />
        </label>
        <button
          type="button"
          onClick={ this.validateClient }
        >
          Registrar Cliente
        </button>
        <Link to="/clients">
          <button type="button">Ver Clientes Cadastrados</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.loginUser.user,
});

const mapDispatchToProps = (dispatch) => ({
  registerNewClient: (newClientData) => dispatch(registerClient(newClientData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegistredCostumers);
