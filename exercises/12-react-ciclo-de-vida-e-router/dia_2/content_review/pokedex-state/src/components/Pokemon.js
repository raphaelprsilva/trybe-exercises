import React, { Component } from 'react';
import './Pokemon.css';

export default class Pokemon extends Component {
  render() {
    const { pokemons } = this.props;
    const { name, type, averageWeight, image } = pokemons;
    const { value, measurementUnit } = averageWeight;
    return (
      <div className="pokemon">
        <div>
          <h3>{name}</h3>
          <p>{type}</p>
          <p>{`Weight: ${value} ${measurementUnit}`}</p>
        </div>
        <img src={image} alt={name} />
      </div>
    );
  }
}
