import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Greeting extends Component {
  render() {
    return (
      <h2>Hello, { this.props.name } { this.props.lastName }</h2>
    );
  }
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

export default Greeting;