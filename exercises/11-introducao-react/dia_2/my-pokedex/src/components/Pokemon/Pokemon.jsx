import React, { Component } from 'react';
import './style.css';

class Pokemon extends Component {
  render() {
    const {
      pokemon: {
        name,
        type,
        averageWeight: {
          value,
          measurementUnit,
        },
        image,
      }
    } = this.props;
    return (
      <li className="card">
          <div className="card-body">
            <p>{ name }</p>
            <p>{ type }</p>
            <p>Weight: { value } { measurementUnit }</p>
          </div>
          <img src={ image } alt={ name } className="card-image"/>
      </li>
    );
  }
}

export default Pokemon;