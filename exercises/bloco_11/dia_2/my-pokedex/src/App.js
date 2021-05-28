import './App.css';
import React from 'react';
import Data from './data';
import PokemonTable from './components/PokemonTable/PokemonTable';
import Header from './components/Header';

class App extends React.Component {
  render() {
    return(
      <main>
        <Header />
        <PokemonTable pokemons={ Data } />
      </main>
    );
  }
}

export default App;
