import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      saveEmail: '',
    };
  }

  changeEmail(value) {
    this.setState({ email: value });
  }

  changeSaveEmail(value) {
    this.setState({ saveEmail: value, email: '' });
  }

  render() {
    const { email, saveEmail } = this.state;
    return (
      <div className="App">
        <label htmlFor="id-email">
          Email
          <input
            id="id-email"
            value={email}
            type="email"
            onChange={(event) => this.changeEmail(event.target.value)}
          />
        </label>

        <input
          id="btn-enviar"
          value="Enviar"
          type="button"
          data-testid="id-send"
          onClick={() => this.changeSaveEmail(email)}
        />
        <input id="btn-id" type="button" value="Voltar" />
        <h2 data-testid="id-email-user">{`Valor: ${saveEmail}`}</h2>
      </div>
    );
  }
}
