import React, { Component } from 'react';

class DadJoke extends Component {
  constructor() {
    super();

    this.saveJoke = this.saveJoke.bind(this);
    this.renderJokeElement = this.renderJokeElement.bind(this);

    // Setando o estado inicial
    this.state = {
      // Objeto com a piada retornada da requisição
      jokeObj: undefined,
      // Chave 'loading', para aparecer, quando a requisição é retornada
      loading: true,
      // Chave que armazena as piadas, a cada clique do botão
      storedJokes: [],
    };
  }

  // Requisição, que traz um objeto contendo uma piada
  async fetchJoke() {
    /*
    Para mostrar o 'loading...' quando uma requisição estiver sendo retornada, nós
    vamos utilizar o setState(). Nesse caso, ele vai ter 2 parâmetros. Teremos algo
    assim:

    this.setState({}, () => {})

    1º Parametro -> {} -> É uma atualização de estado, que no caso, é assíncrona, pois
      depende do retorno da requisição;

    2º Parametro -> () => {} -> É uma callback, e dentro dela, posso colocar o que eu
     desejar;
    */

    this.setState(
      // 1º Parâmetro -> Atualização do estado
      // Setando o loading como true, para depois ele ser chamado dentro do 'render()'
      { loading: true },

      // 2º Parâmetro -> callback asíncrona (async), pois isso retorna uma 'promise'
      async () => {
        const requestHeaders = { headers: { Accept: 'application/json'}};
        const requestReturn = await fetch('https://icanhazdadjoke.com', requestHeaders);
        const returnObject = await requestReturn.json();
        // Aqui ocorre a atualização do 'state', de maneira que 'jokeObj' vai receber
        // o objeto da API, contendo a piada, e o 'state' será atualizado.
        this.setState({
          // Obtive o resultado da requisição? Se sim, eu preciso setar o 'loading' como 'false'
          // pois, caso contrário, ele ficará como true, para sempre!
          // Somente quando meu estado for atualizado, o componente com a piada será renderizado
          // Experimente comentar o 'loading'.
          loading: false,
          jokeObj: returnObject,
        })
      }
    )
  }

  // Fase de montagem
  componentDidMount() {
    // Quando eu estiver na fase de montagem, eu quero mostrar a primeira piada
    // Ou seja, vou jogar dentro do estado, a primeira piada;
    this.fetchJoke();
  }

  saveJoke() {
    // Para armazenar as piadas, eu preciso passar uma callback dentro do 'this.setState',
    // pois, eu preciso salvar todas as piadas, ou seja, eu preciso do estado anterior.
    // Então, vamos fazer o estado anterior seja salvo;
    // Vamos desconstuir o objeto que viria no 'previousState', e vamos setar diretamente
    // o 'jokeObj'. E vamos descontruir também o 'storedJokes', de maneira com que ele receba
    // o valor da requisição anterior (no caso, a piada [estado anterior]), mais a piada atual (estado atual)
    this.setState(({ storedJokes, jokeObj }) => ({
      storedJokes: [...storedJokes, jokeObj]
    }))

    // Assim que é salvamos a piada, outra requisição é feita imediatamente, por isso
    // chamamos a 'this.fetJoke' aqui embaixo.
    this.fetchJoke();
  }

  renderJokeElement() {
    return (
      <div>
        <p>{this.state.jokeObj.joke}</p>
        <button type="button" onClick={this.saveJoke}>Salvar piada!</button>
      </div>
    );
  }

  render() {
    const { storedJokes, jokeObj, loading } = this.state;
    const loadingElement = <span>Loading...</span>
    return (
      <div>
        <span>
        {storedJokes.map(({ id, joke }) => (<p key={ id }>{ joke }</p>))}
        </span>
        {/* Na primeira requisição, o 'render()' vai ser chamado antes do 
          'componentDidMount()', ou seja, antes da requisição ser feita. Assim,
          teremos o 'jokeObj === undefined'.
          Só após isso, o 'componentDidMount()' vai disparar uma uma atualização
          do estado, e essa atualização do estado, vai renderizar novamente, mas
          desta vez, trazendo o 'jokeObj'. E como nós só queremos a 'joke'. Nós
          vamos "pegar" apenas, a propriedade 'joke' do 'jokeObj'.

          Observe o console.log abaixo, e veja o que ela retorna.
        */}
        { console.log(jokeObj) }
        {/* Da maneira como o 'span' está sendo carregado, o 'Loading...' vai ser
          mostrado na tela, somente na primeira requisição, pois, 'jokeObj' vai ser
          'undefined', somente uma vez, ou seja, na primeira. Como resolver isso?
          VEJA NA LINHA 22
        */}
        {/* Se o 'loading' for 'true', me mostra 'Loading...', caso contrário, se
          eu tiver o meu estado atualizado, renderiza a piada;
        */}
        <span>{ loading ? loadingElement : this.renderJokeElement() }</span>
      </div>
    );
  }
}

export default DadJoke;