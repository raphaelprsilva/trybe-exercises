import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        <button type="button">
          <Link to="/login">Login</Link>
        </button>
      </div>
    );
  }
}
