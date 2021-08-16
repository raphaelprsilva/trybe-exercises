import React, { Component } from 'react';
import Pokemon from './Pokemon';
import pokemons from '../data/index';

export default class Pokedex extends Component {
  constructor() {
    super();

    this.state = {
      currentPokemon: 0,
      pokemonTypeSelected: null,
    };

    this.handleNext = this.handleNext.bind(this);
    this.listPokemonsFilteredByType = this.listPokemonsFilteredByType.bind(this);

    this.listPokemonsFilteredByType();
  }

  handleNext(currentPokemon) {
    const isGreaterThanTheAmountOfPokemons = currentPokemon >= pokemons.length - 1;
    if(isGreaterThanTheAmountOfPokemons) {
      this.setState({ currentPokemon: 0 })
    } else {
      this.setState((prevState) => ({currentPokemon: prevState.currentPokemon + 1}));
    }
  }

  listPokemonTypes() {
    return pokemons.map((pokemon) => pokemon.type)
      .filter((type, index, self) => {
        return self.indexOf(type) === index;
      })
  }

  filterPokemonByType(type) {
    this.setState({
      currentPokemon: 0,
      pokemonTypeSelected: type,
    });
    this.listPokemonsFilteredByType();
  }

  listPokemonsFilteredByType() {
    const { pokemonTypeSelected } = this.state;
    const filteredPokemonsByType = pokemons
      .filter((pokemon) => {
        return pokemonTypeSelected ? pokemonTypeSelected === pokemon.type : true;
      })
    console.log('filtered Pokemons', filteredPokemonsByType);
    return filteredPokemonsByType;
  }

  render() {
    const { currentPokemon } = this.state;
    const pokemonTypes = this.listPokemonTypes();
    const filteredPokemons = this.listPokemonsFilteredByType();
    return (
      <div>
        <h1>Pokedex</h1>
        <Pokemon pokemon={filteredPokemons[currentPokemon]} />
        <button type="button" onClick={ () => this.handleNext(filteredPokemons) }>Next Pokemon</button>
        {
          pokemonTypes.map((type, index) => (
            <button
              key={ index }
              type="button"
              onClick={ () => this.filterPokemonByType(type) }
            >
              { type }
            </button>
          ))
        }
      </div>
    );
  }
}
