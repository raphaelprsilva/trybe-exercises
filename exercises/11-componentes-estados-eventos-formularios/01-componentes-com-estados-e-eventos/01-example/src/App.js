import React, { Component } from 'react';

const handleClick2 = () => console.log('clicou no botão 2');
const handleClick3 = () => console.log('clicou no botão 3');

class App extends Component {
  constructor() {
    super();

    this.state = {
      clickNumbers: 0,
    };

    this.handleClick1 = this.handleClick1.bind(this);
  }

  handleClick1 () {
    console.log(this);
    console.log('clicou no botão 1');
    this.setState(({ clickNumbers }) => ({
      clickNumbers: clickNumbers + 1,
    }))
  }

  getButtonColor (num) {
    return num % 2 === 0 ? 'green' : 'red';
  }

  render() {
    const { clickNumbers } = this.state;

    return (
      <div>
        <button
          onClick={this.handleClick1}
          style={{backgroundColor: this.getButtonColor(clickNumbers)}}
        >
          Botão 1: {clickNumbers}
        </button>
        <button onClick={handleClick2}>
          Botão 2
        </button>
        <button onClick={handleClick3}>
          Botão 3
        </button>
      </div>
    )
  }
}

export default App;