import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Clients extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ordened: false,
    };

    this.sortClientsByName = this.sortClientsByName.bind(this);
  }

  sortClientsByName = () => {
    const { registerUsers } = this.props;
    const ordened = [...registerUsers];
    ordened.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      let comparison = 0;

      if (nameA > nameB) {
        comparison = 1;
      } else if (nameA < nameB) {
        comparison = -1;
      }
      return comparison;
    });
    return ordened;
  }

  render() {
    const { user, registerUsers } = this.props;
    const { email } = user;

    if (!email) return <h2>Login não efetuado!</h2>;

    if (!registerUsers.length)
      return (
        <div>
          <h3>Não existem clientes cadastrados!</h3>
          <Link to="/registred-costumers">Cadastrar Clientes</Link>
        </div>
      );

    return (
      <div>
        <Link to="/registred-costumers">
          <button type="button">Cadastre outros</button>
        </Link>
        <button
          type="button"
          onClick={ () => this.setState((state) => ({ ordened: !state.ordened })) }
        >
          Ordenar Clientes
        </button>
        <div>
          {
            registerUsers.map((user, index) => {
              return (
                <div key={ index }>
                  <p>ID de Registro: { index + 1}</p>
                  <p>Nome: { user.name }</p>
                  <p>Idade: { user.age }</p>
                  <p>Email: { user.email }</p>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.loginUser.user,
  registerUsers: state.register,
});

export default connect(mapStateToProps, null)(Clients);
