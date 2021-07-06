import React, { Component } from 'react';

export default class DadJoke extends Component {
  constructor() {
    super();

    // Seta um estado inicial para as propriedades abaixo
    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: [],
    };

    this.fetchJoke = this.fetchJoke.bind(this);
    this.saveJoke = this.saveJoke.bind(this);
  }

  // Faz a requisição para a API
  async fetchJoke() {
    this.setState(
      { loading: true },
      async () => {
        // requestHeaders retorna uma Promise
        const requestHeaders = { headers: { Accept: 'application/json'} };
        const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders);
        const requestObject = await requestReturn.json();
        // Joga a piada no estado
        this.setState({
          loading: false,
          jokeObj: requestObject,
        });
      },
    );
    
  }

  componentDidMount() {
    /*
    Como desejamos que uma piada seja renderizada,
    assim que o componente for montado, é necessário
    inserir o método fetchJoke no componentDidMount
    */
    this.fetchJoke();
  }

  saveJoke() {
    // Salvar a piada no array de piadas existentes
    // Como nós desejamos atualizar o estado, baseado no estado anterior
    // Dentro do setState, nós precisamos inserir uma callback
    this.setState(({ storedJokes, jokeObj }) => ({
      storedJokes: [...storedJokes, jokeObj],
    }));

    this.fetchJoke();
  }

  renderJokeElement() {
    return (
      <div>
        <p>{this.state.jokeObj.joke}</p>
        <button type="button" onClick={this.saveJoke}>
          Salvar piada
        </button>
      </div>
    );
  }

  render() {
    const { storedJokes, loading } = this.state;
    const loadingElement = <span>Loading...</span>;

    return (
      <div>
        <span>
          {storedJokes.map(({ id, joke }) => (<p key={id}>{joke}</p>))}
        </span>

        <span>{loading ? loadingElement : this.renderJokeElement()}</span>
      </div>
    );
  }
}