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

