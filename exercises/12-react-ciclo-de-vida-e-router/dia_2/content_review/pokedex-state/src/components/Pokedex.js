import React, { Component } from 'react';
import Pokemon from './Pokemon';
import pokemons from '../data';

export default class Pokedex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPokemon: 0,
      pokemonType: null,
    };

    this.nextPokemon = this.nextPokemon.bind(this);
  }

  nextPokemon(filteredPokemons) {
    const { currentPokemon } = this.state;
    if (currentPokemon >= filteredPokemons.length - 1) {
      this.setState({ currentPokemon: 0 });
    } else {
      this.setState((prevState) => ({
        currentPokemon: prevState.currentPokemon + 1,
      }));
    }
  }

  listPokemonsTypes() {
    const pokemonTypeList = pokemons
      .map(({ type }) => type)
      .filter((pokemonType, index, self) => {
        return self.indexOf(pokemonType) === index;
      });
    return pokemonTypeList;
  }

  selectPokemonType(type) {
    this.setState({
      currentPokemon: 0,
      pokemonType: type,
    });
  }

  filterPokemonsByType() {
    const { pokemonType } = this.state;
    const filteredPokemonsByType = pokemons.filter(({ type }) => {
      return pokemonType ? type === pokemonType : true;
    });
    return filteredPokemonsByType;
  }

  render() {
    const { currentPokemon } = this.state;
    const pokemonTypes = this.listPokemonsTypes();
    const filteredPokemons = this.filterPokemonsByType();
    console.log(filteredPokemons.length);
    return (
      <div>
        <h1>Pokedex</h1>
        <Pokemon pokemons={filteredPokemons[currentPokemon]} />
        <button
          type="button"
          disabled={filteredPokemons.length === 1}
          onClick={() => this.nextPokemon(filteredPokemons)}>
          Next Pokemon
        </button>
        <button type="button" onClick={() => this.selectPokemonType(null)}>
          All
        </button>
        {pokemonTypes.map((pokemonType, index) => (
          <button
            type="button"
            key={index}
            onClick={() => this.selectPokemonType(pokemonType)}>
            {pokemonType}
          </button>
        ))}
      </div>
    );
  }
}
