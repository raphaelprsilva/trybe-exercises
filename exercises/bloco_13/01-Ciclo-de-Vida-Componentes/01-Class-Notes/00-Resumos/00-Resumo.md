## Resumo - Bloco 13 - Dia 01

### O que vamos aprender?

- Todo componente tem um ciclo de vida **(lifecicle)**;
- As fases de vida têm, associadas a si, **comportamentos**;

### O Ciclo de Vida de um componente React

> Contexto: Aplicação de piadas aleatórias

- Quando eu carregar a página pela primeira vez, uma requisição para a API será feita;

- Será renderizada a piada na tela;

- Quando o componente é invocado, temos que:
    - O ``constructor`` é "rodado" **apenas uma vez**;
    - Depois o ``render`` "roda", e é atualizado, toda vez que alguma **props** ou **estado** é atualizado;

> Pergunta: Onde eu insiro a chamada da API?

- Dentro do ``constructor()`` é uma opção? **Não**
- Dentro do ``render()`` é uma opção? **Não**

> Onde nós vamos inserir então a chamada da API?

### Fases da vida de um Componente React

#### Fase 1 - Montagem

- Quando o **componente** é montado na tela, pela **primeira vez**;
- Vamos associar a essa fase, o método ``componentDidMount()``; 

#### Fase 2 - Atualização

- Quando há:
    - Inserção de novas ``props``;
    - ``setState()``;
    - Atualização do DOM;

- Vamos associar então, o ``componentDidUpdate()``;

#### Fase 3 - Desmontagem

- Quando o componente é **desmontado** da tela;
- Vamos associar a esta fase, o método ``componentWillUnmount()``;

> Link do Ciclo de Vida de Componentes React

[Ciclo de Vida - Componentes React](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

### Onde inserir requisições à APIs

- No ``componentDidMount()``;

~~~javascript
// Requisição à API
async fetchJoke() {
    // requestHeaders retorna uma Promise
    const requestHeaders = { headers: { Accept: 'application/json'} };
    const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders);
    const requestObject = await requestReturn.json();
    // Joga a piada no estado
    this.setState({
      jokeObj: requestObject,
    });
  }

// Local onde vou colocar o método que faz a requisição à API
componentDidMount() {
  this.fetchJoke();
}
~~~

### Renderização Condicional

- Vou fazer uma requisição para a API de piadas, conforme mostrado acima;
- Agora, eu desejo renderizar isso na tela;
- Para isso, temos o código abaixo;

~~~javascript
render() {
    const { storedJokes, jokeObj } = this.state;
    const loadingElement = <span>Loading...</span>;

    return (
      <div>
        <span>
        // O map vai gerar um array e renderizar todas as piadas
        // armazenando-as em um array, à medida que o botão for clicado
          {storedJokes.map(({ id, joke }) => (<p key={id}>{joke}</p>))}
        </span>

        // Renderiza a piada
        <span>{jokeObj.joke}</span>
      </div>
    );
  }
}
~~~

- Da maneira como o código acima está, obteremos um erro, pois o ``jokeObj.joke``, será undefined. Como assim? Por que?;

- Isso acontece, pois na primeira vez que o componente for renderizado, a seguinte sequência é executada:
    - ``constructor()``;
    - ``render()`` - e é aqui que a ``jokeObj.joke`` retornará ``undefined``;
    - ``componentDidMount()`` - é aqui que a requisição retorna o que eu desejo. Ou seja, na primeira renderização, eu não terei nada, por isso, vamos renderizar o ``loadingElement``;

~~~javascript
render() {
    const { storedJokes, jokeObj } = this.state;
    const loadingElement = <span>Loading...</span>;

    return (
      <div>
        <span>
        // O map vai gerar um array e renderizar todas as piadas
        // armazenando-as em um array, à medida que o botão for clicado
          {storedJokes.map(({ id, joke }) => (<p key={id}>{joke}</p>))}
        </span>

        // Renderiza a piada CONDICIONALMENTE
        // Se jokeObj retornar algo, ou seja, for true, a piada
        // é renderizada, caso contrário, o loading será renderizado
        <span>{jokeObj ? jokeObj.joke : loadingElement}</span>
      </div>
    );
  }
}
~~~

### Renderizando o ``Loading...``, entre uma requisição ou outra

- Da maneira como o código está, cada vez que você clicar no botão ``Salvar piada``, uma nova piada é adicionada, porém, é perceptível, que ao clicar, a piada anterior é mostrada, logo antes de se renderizar a próxima;
- O que nós queremos, é que, ao clicar no botão, antes da requisição finalizar, um "loading..." seja mostrado;
- Para isso, vamos entender o ``setState()``;
- Geralmente, nós utilizamos o ``setState()`` de duas maneiras.

~~~javascript
// Quando eu desejo um estado novo, como neste exemplo
this.setState({
    jokeObj: requestObject,
  });
~~~

~~~javascript
// Quando eu desejo um estado novo, baseado no anterior
this.setState(({ storedJokes, jokeObj }) => ({
      storedJokes: [...storedJokes, jokeObj],
    }));
~~~

- Nós vamos utilizar o ``setState()`` com dois parâmetros:

~~~javascript
this.setState(primeiroParametro, segundoParametro);

// primeiroParametro = Atualização de estado (Enquanto o estado não atualizar, renderiza o loading na tela);

// segundoParametro = Terá a função assíncrona (requisição) - Atualizou? renderiza na tela a piada;
~~~

- Veja o exemplo abaixo:

~~~javascript
this.setState(
  {}, // Primeiro Parâmetro
  () => {}, // Segundo Parâmetro
);
~~~

- Inserindo a lógica do loading:

~~~javascript
this.setState(
  // Primeiro Parâmetro
  {loading: true},
  // Segundo Parâmetro
  async () => {
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
~~~

- Desta maneira, enquanto o ``loading`` for ``true``, a palavra "Loading..." será renderizada;
- Assim que a requisição retornar a piada, ela será renderizada na tela;