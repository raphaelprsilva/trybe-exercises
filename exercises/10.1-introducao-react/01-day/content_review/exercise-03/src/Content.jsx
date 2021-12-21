import React, { Component } from 'react';

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
      <ul className='list'>
        {
          conteudos.map(({ conteudo, bloco, status }, index) => (
            <li key={index} className='list-item'>
              <p>O conteúdo é: {conteudo}</p>
              <p>Status: {status}</p>
              <p>Bloco: {bloco}</p>
            </li>
          ))
        }
      </ul>
    )
  }
}

export default Content;
