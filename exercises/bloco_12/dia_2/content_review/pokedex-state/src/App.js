import React, { Component } from 'react';
import Pokedex from './components/Pokedex';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App-header">
        <Pokedex />
      </div>
    );
  }
}
