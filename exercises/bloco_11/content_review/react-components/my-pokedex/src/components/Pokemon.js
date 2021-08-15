import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Pokemon extends Component {
  render() {
    const { pokemon } = this.props;
    const { id, name, type, averageWeight, image } = pokemon;
    const { value, measurementUnit } = averageWeight;
    return (
      <div key={id}>
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>
            Average Weight: {value} {measurementUnit}
          </p>
        </div>
        <img src={image} alt={name} />
      </div>
    );
  }
}

Pokemon.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  type: PropTypes.string,
  averageWeight: PropTypes.objectOf(PropTypes.string),
  image: PropTypes.string,
}.isRequired;
