import React from 'react';
import Pokemon from './Pokemon';
import Button from './components/Button';

class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props;

      return (
        <>
          <div className="pokedex">
              {
                pokemons
                  .filter((_pokemon, index) => index === 0)
                  .map((pokemon) => {
                    return <Pokemon key={pokemon.id} pokemon={pokemon} />
                  })
              }
          </div>
          <Button name="Próximo Pokemon" />
          <Button name="Fire" />
          <Button name="Psychic" />
        </>
      );
  }
}

export default Pokedex;