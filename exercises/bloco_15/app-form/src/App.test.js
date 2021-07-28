import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

it('alterando o valor dos campos e testando o valor guardado', () => {
  render(<App />);
  const inputNome = screen.getByTestId('input-nome');
  const inputEmail = screen.getByTestId('input-email');

  // Espero que o campo inputNome, não contenha valor algum
  expect(inputNome).toHaveValue('');

  // Eu quero que você insira no 'inputName' o value: 'Estudante da Trybe'
  fireEvent.change(inputNome, { target: { value: 'Estudante da Trybe' } });

  // Eu espero que no 'inputNome', exista o value: 'Estudante da Trybe'
  expect(inputNome).toHaveValue('Estudante da Trybe');

  // Eu espero inicialmente, que não exista nenhum 'value' no 'inputEmail'
  expect(inputEmail).toHaveValue('');

  // Agora, eu quero que você (fireEvent), mude (change) o campo 'inputEmail' com o 'value': 'estudante@trybe.com'
  fireEvent.change(inputEmail, { target: { value: 'estudante@trybe.com' } });

  // Eu espero que o campo 'inputEmail', tenha o valor (value) igual a 'estudante@trybe.com'
  expect(inputEmail).toHaveValue('estudante@trybe.com');
});
