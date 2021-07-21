// Importar o React
import React from 'react';

// Importar o render
import { render, screen } from '@testing-library/react';

// Importar o seu componente principal, no caso, o App
import App from './App';

// Este comando faz com que, após cada teste, o mock seja limpo, ou seja, garante
// que após o teste, o fetch não seja mais um mock, não interferindo em outros testes
afterEach(() => jest.clearAllMocks());

// Começar o teste
// O segundo parâmetro do método 'test', é uma função anônima;
// Neste caso, temos que inserir um 'async', pois estamos simulando uma requisição;
test('Verifica se, quando recebo uma piada, ela é mostrada na tela', async () => {
  // Declaramos um objeto, representando a resposta da API
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Witeboards... are remarkable',
    status: 200,
  };

  // Vamos mockar a função que retorna a Promise
  // Para isso, vamos utilizar a função que mocka no Jest
  const response = { json: jest.fn().mockResolvedValue(joke) };

  // Neste comando basicamente está dizendo: "Vou ficar de olho nas chamadas do fetch do objeto global"
  // Assim, podemos usar qualquer função do sistema, como por exemplo, a função parseInt
  jest.spyOn(global, 'fetch');

  // Temos acesso a um objeto, chamado 'global'. E dentro deste objeto, temos acesso à função 'fetch'
  // Então, queremos a resposta desta Promise. Para isso, fazemos:
  global.fetch = jest.fn().mockResolvedValue(response);

  // Chamamos o render, para saber, que precisamos renderizar o componente <App />
  render(<App />);

  // o await é necessário, pois estamos utilizando um método assíncrono
  await screen.findByText('Witeboards... are remarkable');

  // espera que o fetch tenha sido chamado apenas uma vez
  expect(global.fetch).toBeCalledTimes(1);

  // espera que os argumentos foram passados corretamente
  expect(global.fetch).toBeCalledWith('https://icanhazdadjoke.com/', {
    headers: { Accept: 'application/json' },
  });
});
