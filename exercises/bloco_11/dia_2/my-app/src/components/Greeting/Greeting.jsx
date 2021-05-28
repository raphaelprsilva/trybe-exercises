import React from 'react';
import './style.css';

class Greeting extends React.Component {
  render() {
      return (
        <h1 className="greeting-item">Hello, {this.props.name} {this.props.lastName}</h1>
      );
  }
}

export default Greeting;