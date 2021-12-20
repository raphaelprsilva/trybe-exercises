import React from 'react';

import './App.css';
import HelloWorld from './components/HelloWorld';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className='HelloWorld'>My first Component</h1>
        <HelloWorld />
      </div>
    );
  }
}

export default App;
