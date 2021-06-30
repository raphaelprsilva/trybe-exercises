import React, { Component } from 'react';

export default class MyJokeComponent extends Component {
  constructor() {
    super();
    console.log('constructor');

    this.state = {
      piada: 'Minha piada',
    };
  }

  render() {

    console.log('render');
    return (<span>{this.state.piada}</span>);

  }
}