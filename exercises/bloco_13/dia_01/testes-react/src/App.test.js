import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('Tela de inserção do email', () => {
  it('Verifica que há um campo input email na tela', () => {
    // 1 - Acessar elementos da tela
    const { getByLabelText } = render(<App />);
    const inputEmail = getByLabelText('Email');

    // 3 - Fazer o teste
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail.type).toBe('email');
  });

  it('Verifica que há dois botões', () => {
    // 1 - Acessar elementos da tela
    const { getAllByRole } = render(<App />);
    const submitButton = getAllByRole('button');

    // 3 - Fazer seu teste de RESPONSABILIDADE ÚNICA
    expect(submitButton.length).toBe(2);
  });

  it('Verifica que há um botão "Enviar"', () => {
    // 1 - Acessar elementos da tela
    const { getByTestId } = render(<App />);
    const submitButton = getByTestId('id-send');

    // 3 - Fazer seu teste de RESPONSABILIDADE ÚNICA
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveValue('Enviar');
  });

  it('Verifica que ao inserir o email e cricar em "Enviar", o email aparece na tela', () => {
    // 1 - Acessar os Elementos da Tela
    const { getByTestId, getByLabelText } = render(<App />);
    const emailInput = getByLabelText('Email');
    const sendButton = getByTestId('id-send');
    const userEmail = getByTestId('id-email-user');

    // 2 - Interagir com os elementos
    fireEvent.change(emailInput, { target: { value: 'raphael@teste.com' } });
    fireEvent.click(sendButton);

    // 3 - Fazer os testes
    expect(emailInput.value).toBe('');
    expect(userEmail.textContent).toBe('Valor: raphael@teste.com');
  });
});
