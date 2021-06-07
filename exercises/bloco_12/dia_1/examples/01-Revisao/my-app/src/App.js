import React, { Component } from 'react';

// Fazer isso aqui, é errado!
/* function handleClick() {
  console.log('Clicou!');
} */

/*-----------------------------------------------------------
  Palabra 'this'

  'this' - objeto JS que fala de um contexto em específico,
    no caso, o da classe

  - Então, quando eu faço: this.handleClick, eu quero a
      handleClick 'dentro' da classe App;
-----------------------------------------------------------*/


/*-----------------------------------------------------------
  CONSTRUCTOR()

  - 
-----------------------------------------------------------*/

class App extends Component {
  handleClick() {
    console.log('Clicou!');
  }

  render() {
    return (
      <button onClick={ this.handleClick }>My button</button>
    );
  }
}

export default App;