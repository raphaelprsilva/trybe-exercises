## Resumo - Bloco 13 - Dia 02

### React Router

#### Single Page Application (SPA)

- São aplicações cuja funcionalidade está concentrada em uma única página;
- Ao invés de carregar toda a página ou redirecionar o usuário para uma página nova, apenas o conteúdo principal é atualizado de forma assíncrona, mantendo a estrutura da página estática;

#### React Router DOM

- Para instalar o ``React Router Dom``, basta utilizar o comando:
    - ``npm install react-router-dom``;


#### Browser Router e Route

- Vamos ver como utilizar o Browser Router;

1. Importar o ``BrowserRouter`` no Componente desejado;

- No Componente ``App``, vamos fazer:

~~~javascript
import { BrowserRouter } from 'react-router-dom';
~~~

2. Inserir o Componente ``BrowserRouter`` como pai dos demais;

~~~javascript
export default class App extends Component {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
}
~~~

- No componente ``<Home>``, teremos:

1. Vamos inserir uma ``Route``;
    - Importamos o Componente ``Route``;

~~~javascript
import { Route } from 'react-router-dom';
~~~

- Inserimos a Rota;
    - Nesse caso, estamos dizendo:
    - Se alguém digitar no browser: ``localhost.3000/about``, você renderiza, o componente ``About``;
    - Se alguém digitar no browser: ``localhost.3000/howto``, você renderiza, o componente ``HowTo``;

~~~javascript
export default class Home extends Component {
  render() {
    return (
      <div>
        <Route path="/about" component={About}>
        <Route path="/howto" component={HowTo}>
      </div>
    );
  }
}
~~~

#### No frigir dos ovos

> No App Component

~~~javascript
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

export default class App extends Component {
  return (
    <BrowserRouter>
      // Renderiza somente a home com o 'exact'
      <Route exact path="/" component={Home} />
      <Route path="/howto" component={HowTo} />
      <Route path="/about" component={About} />
    </BrowserRouter>
  );
}
~~~

### Componente ``Link``

- Para utilizá-lo, faremos o seguinte:

~~~javascript
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        // Cria um link que redireciona para a página "About"
        // Faz o papel da tag <a>, só que sem precisar recarregar a página
        <Link to="/about">About</Link>
      <div>
    );
  }
}
~~~

### Componentes Route com props

- Como passar props para o Route?

~~~javascript
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

export default class App extends Component {
  return (
    <BrowserRouter>
      // Renderiza somente a home com o 'exact'
      <Route exact path="/" component={Home} />

      <Route path="/howto" component={HowTo} />

      // Passando props para o Componente no Route
      // Chamando o 'render'
      <Route path="/profile" render={() => <Profile minhaProp="asdasdas">} />

      // Passando as props do Router
      // Quando fazemos isso, e vemos no console, o que recebemos,
      // Temos um array com três objetos
      // history, location e match
      <Route path="/teste" render={(props) => <Teste {...props}>} />

      // Agora, desejamos ter algo assim: meusite.com/user/raphael
      // Os dois pontos (:) significam que a rota pode ser qualquer palavra e isso vai chegar para o componente com a chave "oqueeudesejo"
      // No componente Teste, nós precisamos pasar o parâmetro
      // "oqueeudesejo" como parametro
      // const { oqueeudesejo } = this.props.match.params
      <Route path="/user/:oqueeudesejo " render={(props) => <Teste {...props}>} />
    </BrowserRouter>
  );
}
~~~

### Switch

~~~javascript
<Switch>
  <Route path="/about" component={About} />
  <Route path="/contact" component={Contact} />
  <Route path="/movies" component={Movies} />
  <Route path="/" component={Home} />
</Switch>
~~~

- Todos os filhos de ``Switch`` devem ser um ``Route`` ou ``Redirect``;
