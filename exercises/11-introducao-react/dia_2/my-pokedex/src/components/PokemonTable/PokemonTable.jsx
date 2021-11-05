import React, { Component } from 'react';
import Pokemon from '../Pokemon/Pokemon';
import './style.css';

class PokemonTable extends Component {
  render() {
    const { pokemons } = this.props;

    return (
      <ul className="pokemon-list">
        {pokemons.map((pokemon) => <Pokemon key={ pokemon.name } pokemon={ pokemon } />)}
      </ul>
    );
  }
}

export default PokemonTable;
