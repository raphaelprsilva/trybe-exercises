import React, { Component } from 'react';

class EstadoFavorito extends Component {
  render() {
    const { value, handlerChange } = this.props;

    let erro = undefined;
    if(value.length > 15) erro = 'Digite algo certo!';

    return(
      <label>
        Insira o texto que desejar
        <textarea
          name="estadoFavorito"
          value={value}
          onChange={handlerChange}
        />
        <span>{erro ? erro : ''}</span>
      </label>
    );
  }
}

export default EstadoFavorito;