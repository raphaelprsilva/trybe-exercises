import React, { Component } from 'react';

class EstadoFavorito extends Component {
  render() {
    const { value, handleChange } = this.props;

    let error = undefined;
    if (value.length > 30) error = 'Texto muito Grande';

    return (
      <label className="form">
        Diga qual seu estado favorito

        {/* Exemplo de Componente Controlado pelo React */}
        <textarea
          name="estadoFavorito"
          value={ value }
          onChange={ handleChange }
        />
        <span>{error ? error : ''}</span>
      </label>
    );
  }
}

export default EstadoFavorito;