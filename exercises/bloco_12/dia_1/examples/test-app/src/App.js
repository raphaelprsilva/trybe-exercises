import React, { Component } from 'react';



class App extends Component {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      contaCliques1: 0,
    }
  }

  handleClick() {
    this.setState((estadoAnterior, _props) => ({
      contaCliques1: estadoAnterior.contaCliques1 + 1
    }))
  }

  render() {
    console.log(this);
    return (
      <section>
        <button onClick={ this.handleClick }>Botão 1: { this.state.contaCliques1 }</button>
      </section>
    );
  }
}

export default App;
