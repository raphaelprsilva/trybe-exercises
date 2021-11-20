import { Component } from 'react';
import './Content.css';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends Component {
  render() {
    return (
      <main className="Content">
        <ul className="Content-list">
          {
            conteudos.map((content) => {
              return (
                <li key={content.bloco} className="Content-list-item">
                  <p>O conteúdo do bloco é: {content.conteudo}</p>
                  <p>Status: {content.status}</p>
                  <>Bloco: {content.bloco}</>
                </li>
              );
            })
          }
        </ul>
      </main>
    );
  }
}

export default Content;
