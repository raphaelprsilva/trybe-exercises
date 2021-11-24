import React, { Component } from 'react';

class Button extends Component {
  // constructor () {
  //   super();

  //   this.state = {

  //   };
  // }

  render() {
    const { name, onNextPokemon } = this.props;

    return (
      <button onClick={onNextPokemon}>
        {name}
      </button>
    )
  }
}

export default Button;
