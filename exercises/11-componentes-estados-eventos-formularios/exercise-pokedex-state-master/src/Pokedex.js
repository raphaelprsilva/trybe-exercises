import React from 'react';
import Pokemon from './Pokemon';
import Button from './components/Button';

class Pokedex extends React.Component {
  constructor() {
    super();

    this.state = {
      currentPokemonPosition: 0,
    };

    this.nextPokemonHandler = this.nextPokemonHandler.bind(this);
  }

  nextPokemonHandler () {
    const { currentPokemonPosition } = this.state;
    const { pokemons } = this.props;

    if (currentPokemonPosition >= pokemons.length - 1) {
      this.setState(() => ({ currentPokemonPosition: 0 }));
    } else {
      this.setState((prevState) => ({
        currentPokemonPosition: prevState.currentPokemonPosition + 1,
      }));
    }
  }

  render() {
    const { pokemons } = this.props;
    const { currentPokemonPosition } = this.state;

      return (
        <>
          <div className="pokedex">
              {
                pokemons
                  .filter((_pokemon, index) => index === currentPokemonPosition)
                  .map((pokemon) => {
                    return <Pokemon key={pokemon.id} pokemon={pokemon} />
                  })
              }
          </div>
          <Button
            name="Próximo Pokemon"
            onNextPokemon={this.nextPokemonHandler}
          />
          <Button name="Fire" />
          <Button name="Psychic" />
        </>
      );
  }
}

export default Pokedex;