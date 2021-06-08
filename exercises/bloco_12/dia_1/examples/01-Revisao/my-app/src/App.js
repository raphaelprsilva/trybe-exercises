import React, { Component } from 'react';

// Fazer isso aqui, é errado!

/* function handleClick() {
  console.log('Clicou!');
} */

/*-----------------------------------------------------------
  Palavra 'this'

  'this' - objeto JS que fala de um contexto em específico,
    no caso, o da classe

  - Então, quando eu faço: this.handleClick, eu quero a
      handleClick 'dentro' da classe App;
-----------------------------------------------------------*/


/*-----------------------------------------------------------
  CONSTRUCTOR()

  - A função constructor já vem por padrão dentro de uma class;
  - Quando nós declaramos a função constructor(), dentro da class, isso sigfinica que, estamos sobrescrevendo a original, e falando que desejamos que algo seja feito;
  - A constructor() será o primeiro método a ser chamado;

  - É preciso sempre que invocar constrcutor(), invocar o super();

  - Na função render(), o this é reconhecido;
  - Na handleClick(), o this não é reconhecido, a não ser que seja feito o bind;

  - BIND
    - o bind() precisa ser feito, para que a classe possa enxergar
      o 'this'.

    - Qual a importância disso?
      - Isso é importante, pois, fazendo o 'bind', o método handleClick consegue receber as 'props';

  - STATE
    - o this.state se refere a um estado inicial, de algum componente que eu desejo manipular e interagir;
    - Isso significa que o 'this.state' é variável, diferentemente das 'props'
    - Cada componente possuí seu 'this.state';
-----------------------------------------------------------*/

class App extends Component {
  constructor() {
    super();
    console.log('Componente sendo construído');

    // faz a ligação do método handleClick para ter acesso ao this
    this.handleClick = this.handleClick.bind(this);

    // - Estou definindo um estado inicial para os cliques
    this.state = {
      numeroDeCliques: 0
    }
  }

  handleClick() {
    // - Só porque eu fiz o bind(this) no constructor, eu posso, acessar o 'this' aqui;
    // - Não posso fazer 'this.state()' dentro do meu método

    // - A arrow function chamada dentro do setState, faz garantir que, o próximo estado, só seja executada, caso o estado anterior já sido executado

    // - A atualização seguinte, depende da anterior

    // - O setState() funciona de maneira assíncrona.

    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
  }

  render() {
    return (
      <button onClick={ this.handleClick }>Número de Cliques: {this.state.numeroDeCliques}</button>
    );
  }
}

export default App;