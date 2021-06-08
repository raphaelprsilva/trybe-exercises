import React, { Component } from 'react';
import EstadoFavorito from './EstadoFavorito';
import './Form.css';

/*--------------------------------------------------------------------
  FORMS

  - No JS tradicional, ao clicar no botão de "Enviar", todas as informações eram armazenadas no DOM;

  - As informações de formulários, no React, serão armazenadas no STATE, ou seja, no ESTADO do COMPONENTE;

  - PASSOS:
    1º - Crie as tags do formulário com as propriedades:

      - "name": pois é ela que vai fazer a conexão com 'this.state';
      - "value": é nela que você vai atribuir o 'this.state.nomeEstado';
      - "onChange": essa propriedade, "pega" cada mudança feita e conecta com o método associado;

      Exemplo:

      <label className="form">
        Diga qual seu estado favorito
        <textarea
          name="estadoFavorito"
          value={ this.state.estadoFavorito }
          onChange={ this.handleTextAreaChange }
        />
      </label>

--------------------------------------------------------------------*/



class Form extends Component {
  constructor() {
    super();

    // Isso nos permite acessar o 'this' no handleTextAreaChange
    this.handleChange = this.handleChange.bind(this);

    // Estado inicial
    this.state = {
      estadoFavorito: '',
      email: '',
      nome: '',
      idade: 0,
      vaiComparecer: false,
      palavraChaveFavorita: '',
    };
  }

  /* Handler Único para lidar com os estados */
  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div>
        <h1>Estados e React: ferramenta incrível</h1>

        {/*
          Algumas Observações:
          - o Componente <Form /> possui o seu próprio método para lidar com a mudança de estados, que no caso é o 'handleChange()';
          - No caso, nós criamos um componente filho, o <EstadoFavorito />, que possuem algumas propriedades que lidam com 'states';
          - Nós não iremos criar um método para lidar com estados no <EstadoFavorito />;
          - Passamos como props, o método que executa a mudança de estado no pai, e ao alterar o estado, essa mudança se reflete no <Form />;
          - o <Form /> tem total controle sobre o estado dos filhos.

          value e handleChange -> foram passadas como props do componente 'EstadoFavorito';
          value -> vai lidar com o state inicial
          handleChange -> vai lidar com a mudança dos estados
        */}
        <form>
          <EstadoFavorito
            value={ this.state.estadoFavorito }
            handleChange={ this.handleChange }
          />

          <label>
            Email
            <input
              type="email"
              name="email"
              value={ this.state.email }
              onChange={ this.handleChange }
            />
          </label>

          <label>
            Nome
            <input
              type="text"
              name="nome"
              value={ this.state.nome }
              onChange={ this.handleChange }
            />
          </label>

          <label>
            Idade
            <input
              type="number"
              name="idade"
              value={ this.state.idade }
              onChange={ this.handleChange }
            />
          </label>

          <label>
            Vai comparecer a conferencia?
            <input
              type="checkbox"
              name="vaiComparecer"
              checked={ this.state.vaiComparecer }
              onChange={ this.handleChange }
            />
          </label>

          <label>
            Escolha a palavra chave:
            <select
              name="palavraChaveFavorita"
              value={ this.state.palavraChaveFavorita }
              onChange={ this.handleChange }
            >
              <option value="estado">Estado</option>
              <option value="evento">Evento</option>
              <option value="props">Props</option>
              <option value="hookd">Hooks</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default Form;