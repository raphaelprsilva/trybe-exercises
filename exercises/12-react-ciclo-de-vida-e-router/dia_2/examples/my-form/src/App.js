import React, { Component } from 'react';
import EstadoFavorito from './EstadoFavorito';

class App extends Component {
  constructor() {
    super();

    this.handlerChange = this.handlerChange.bind(this);

    this.state = {
      estadoFavorito: '',
      email: '',
      wouldLike: false,
    };
  }

  handlerChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value
    })
  }

  render() {
    return(
      <div>
        <form>
          <EstadoFavorito
            value={this.state.estadoFavorito}
            handlerChange={this.handlerChange}
          />
          <label>
            E-mail
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handlerChange}
            />
          </label>
          <label>
            Marque se você quer receber e-mails
            <input
              type="checkbox"
              name="wouldLike"
              value={this.state.wouldLike}
              onChange={this.handlerChange}
            />
          </label>
        </form>
      </div>
    );
  }
}

export default App;
