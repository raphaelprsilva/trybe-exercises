import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Clients extends Component {
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
        <Link to="/registred-costumers">Cadastre outros</Link>
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
