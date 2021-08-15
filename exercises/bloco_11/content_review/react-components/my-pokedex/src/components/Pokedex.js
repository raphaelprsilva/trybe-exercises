import React, { Component } from 'react';
import Pokemon from './Pokemon';
import pokemons from '../data/index';

export default class Pokedex extends Component {
  constructor() {
    super();

    this.state = {
      currentPokemon: 0,
    };

    this.handleNext = this.handleNext.bind(this);
  }

  handleNext() {
    const { currentPokemon } = this.state;
    if (currentPokemon > pokemons.length) {
      console.log(currentPokemon, pokemons.length)
      this.setState({ currentPokemon: 0 });
    } else {
      this.setState((prevState) => ({currentPokemon: prevState.currentPokemon + 1}));
    }
    console.log(currentPokemon);
  }

  render() {
    const { currentPokemon } = this.state;
    return (
      <div>
        <Pokemon pokemon={pokemons[currentPokemon]} />
        <button type="button" onClick={ this.handleNext }>Next Pokemon</button>
      </div>
    );
  }
}
