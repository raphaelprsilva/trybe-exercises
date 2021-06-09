import React, { Component } from 'react';

class DadJoke extends Component {
  constructor() {
    super();

    // Setando o estado inicial
    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: [],
    };
  }
  render() {
    return (
      <h1>Hahahah</h1>
    );
  }
}

export default DadJoke;