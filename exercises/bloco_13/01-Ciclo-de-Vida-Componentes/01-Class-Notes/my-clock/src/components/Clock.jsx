import React, { Component } from 'react';
import PropTypes from 'prop-types';

const ONE_SECOND = 1000;

class Clock extends Component {
  constructor() {
    super();

    this.state = {
      // Este é o estado inicial da minha aplicação
      currentDateTime: new Date(),

      // Não precisamos mais do showDateTime, pois criamos a lógica, no
      // componente pai, no caso, o App
      // showDateTime: true,
    }

    /*
      Eu até posso colocar o 'setInterval()' dentro do constructor, no entanto,
      temos o 'setState()' dentro do 'setInterval()'. Isso não faz muito
      sentido, pois, o estado está sendo inicializado dentro do 'constructor()'

      E, logo após isso, eu estou atualizando o estado novamente, com o 
      'setInterval()'.

      No ciclo de vida de componentes, o 'constructor()' é a primeira "função"
      a ser chamada, ou seja, ele acontece, antes de ser renderizado qualquer
      coisa, na tela. Isso pode gerar EFEITOS COLATERAIS.

      Ou seja, eu posso gerar coisas desnecessárias no render.

      - 'setInterval()' foi comentado, e deixado aqui, para fins didáticos
    */
    /* setInterval(() => {
      console.log('caiu no setInterval');
      this.setState({
        currentDateTime: new Date(),
      })
    }, ONE_SECOND); */
  }

  /*
    - O lugar ideal para se colocar o 'setInterval()' é dentro do
      componentDidMount();
    - O 'componentDidMount()' vai ser executado APÓS o 'render()';
    - O 'componentDidMount()' é chamado SOMENTE UMA ÚNICA VEZ, no começo da
      aplicação;
    - Preciso atualizar um estado? Se sim, você vai colocar a lógica dentro
      do 'componentDidMount()'. Ex.: Requisição de API;

    - Pense no fluxo de "chamada":
      constructor() -> render() -> componentDidMount() -> setInterval()
        -> setState() -> render() -> atualiza o DOM -> e assim por diante...

    - Podemos associar o 'componentDidMount()' com o 'onLoad()' do JS, ou seja,
      ele vai garantir, que algo vai 'rodar', somente, quando o DOM estiver 
      renderizado e disponível;
  */
  componentDidMount() {
    this.intervalId = setInterval(() => {
      console.log('caiu no setInterval');
      this.setState({
        currentDateTime: new Date(),
      })
    }, ONE_SECOND);
  }

  // Quando o componente for removido da tela, vamos chamar o método:
  componentWillUnmount() {
    console.log('vai desmontar!');
    // Vamos linpar nosso setInterval()
    clearInterval(this.intervalId);
  }

  render() {
    // Eu não posso colocar meu setInterval() com o 'setState()' dentro do render

    // Código comentado, mas foi deixado aqui, para explicar o porquê de não
    // colocar o 'setInterval()' dentro do 'render()';
    /* setInterval(() => {
      // O 'setState()' está atualizando meu estado;
      // E o 'setState()' sempre chama o 'render()';
      // Isso fará com que assim que "entrarmos" no 'render()', o 'setState()'
      // vai disparar o 'render()' novamente. Então => Atualizou o estado através
      // do 'setState()' ? Se sim, chama o 'render()', e isso irá acontecer a cada
      // 1 segundo. Isso gerará um loop infinito. Uma função sempre chamará a outra
      // infinitamente.

      // console.log('caiu no setInterval');
      this.setState({
        currentDateTime: new Date(),
      })
    }, ONE_SECOND); */

    const { currentDateTime } = this.state;
    const { turnOffClock, showDateTime } = this.props;

    return (
      <section>
        {
          /*
            Ao invés de usar um ternário, como está comentado abaixo, vamos
            utilizar uma expressão, assim:

            showDateTime
              && <span>{ currentDateTime.toLocaleTimeString() }</span>

            Qual a lógica? -> showDateTime é true? Se sim, mo mostre o que eu
            quero. Se showDateTime for false, ele não vai renderizar nada.
          */
          // DEIXADO PARA FINS DIDÁTICOS
          /* showDateTime
            ? <span>{ currentDateTime.toLocaleTimeString() }</span>
            : ''
          */

          showDateTime && <span>{ currentDateTime.toLocaleTimeString() }</span>
        }
        <button type="button" onClick={ turnOffClock }>Desligar relógio</button>
      </section>
    );
  }
}

Clock.propTypes = {
  turnOffClock: PropTypes.func.isRequired,
  showDateTime: PropTypes.bool.isRequired,
}

export default Clock;