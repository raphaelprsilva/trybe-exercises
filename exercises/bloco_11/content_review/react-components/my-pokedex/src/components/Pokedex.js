import React, { Component } from 'react';
import Pokemon from './Pokemon';
import pokemons from '../data/index';

export default class Pokedex extends Component {
  render() {
    return (
      <div>
        {pokemons.map((pokemon) => (
          <Pokemon key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    );
  }
}
