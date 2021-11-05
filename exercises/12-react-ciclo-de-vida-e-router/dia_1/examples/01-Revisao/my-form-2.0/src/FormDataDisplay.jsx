import React, { Component } from 'react';

class FormDataDisplay extends Component {
  render() {
    const {
      currentState: {
        nome, email, cpf, endereco, cidade, estado,
        tipoDeEndereco, curriculo, cargo, descricaoCargo
      }
    } = this.props;

    return (
      <div>
        <h2>Dados Enviados</h2>
        <h3>Dados Pessoais</h3>
        <div>Name: { nome }</div>
        <div>Email: { email }</div>
        <div>CPF: { cpf }</div>
        <div>Endereço: { endereco }</div>
        <div>Cidade: { cidade }</div>
        <div>Estado: { estado }</div>
        <div>Tipo de Residência: { tipoDeEndereco }</div>
        <h3>Dados Profissionais</h3>
        <div>Currículo: { curriculo }</div>
        <div>Cargo: { cargo }</div>
        <div>Descrição do Cargo: { descricaoCargo }</div>
      </div>
    );
  }
}

export default FormDataDisplay;