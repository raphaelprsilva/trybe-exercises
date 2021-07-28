import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      // Estado inicial com os personagens
      characters: [],
    };

    this.fetchCharacters = this.fetchCharacters.bind(this);
  }

  // Requisição à API
  fetchCharacters() {
    // A chave 'results' é a que contém o que eu desejo
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(({ results }) => {
      this.setState({characters: results})
    })
  }

  componentDidMount() {
    this.fetchCharacters();
  }
  

  render() {
    const { characters } = this.state;
    return (
      <div className="App">
        <h1>
          Ricky and Morty Characters
        </h1>
        <div className="body">
          {characters.map(({ name, image }) => {
            return (
              <div className="container" key={ name }>
                <h3>{name}</h3>
                <img src={image} alt={name}/>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
