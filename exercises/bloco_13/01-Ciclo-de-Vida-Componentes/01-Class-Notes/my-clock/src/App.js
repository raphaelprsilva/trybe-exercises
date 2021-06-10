import React, { Component } from 'react';
import Clock from './components/Clock';

class App extends Component {
  constructor() {
    super();

    this.turnOffClock = this.turnOffClock.bind(this);

    this.state = {
      showDateTime: true,
    };
  }

  // Passamos esse método para aqui
  turnOffClock() {
    const { showDateTime } = this.state;
    this.setState({
      showDateTime: !showDateTime,
    });
  }

  render() {
    const { showDateTime } = this.state;

    return (
      <main className="App">
        {/*
          - Eu desejo desmontar o componente. Como posso fazer isso?
            Resposta: com uma RENDERIZAÇÃO CONDICIONAL, utilizando 
              componentWillUnmount()
          - Então, vamos utilizar a mesma lógica da linha 115, do Clock
            component. Para isso, vamos criar um 'state'. Veja abaixo:
        */}
        {showDateTime &&
          <Clock
            turnOffClock={ this.turnOffClock }
            showDateTime={ showDateTime }
          />}
      </main>
    );
  }
}

export default App;