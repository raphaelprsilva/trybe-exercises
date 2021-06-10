import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Setando uma chave 'characters', como um array vazio no meu 'initial state',
      // pois, será ela, que receberá o resultado da minha requisição da API
      characters: [],
    };
  }

  fetchCharacters = () => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        // a chave 'characters' vai receber os resultados da request e o 'state' será atualizado
        this.setState({characters: data.results})
      })
  }

  // Caso eu não chame o 'componentDidMount()', passando dentro dele o método que faz a requição,
  // no caso, o 'fetchCharacters()', o CÓDIGO SERÁ RENDERIZADO, ANTES DA REQUISIÇÃO RETORNAR.
  // Logo, caso dermos um 'console.log(characters)', receberemos um array vazio

  // Existem duas maneiras de utilizar o 'componentDidMount()', para este caso:

  // 1ª Maneira: chamando o fetchCharacters() dentro do 'componentDidMount()'
  componentDidMount() {
    this.fetchCharacters();
  }

  //  2ª Maneira (COMENTADO): passando a REQUISIÇÃO dentro do 'componentDidMount()'
  // componentDidMount() {
  //   fetch('https://rickandmortyapi.com/api/character')
  //     .then(response => response.json())
  //     .then(data => {
  //       // a chave 'characters' vai receber os resultados da request e o 'state' será atualizado
  //       this.setState({characters: data.results})
  //     })
  // }


  render() {
    const { characters } = this.state;
    return(
      <div className="App">
        <h1>
          Ricky and Morty Characters:
        </h1>

        <div className="body">
          {console.log(characters)}
          {characters.map(({ name, image }) => {
            return (
              <div className="container" key={name}>
                <h3>{ name }</h3>
                <img src={ image } alt={ name }/>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
