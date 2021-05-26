import './App.css';
import React from 'react';
import Greeting from './Greeting';

class App extends React.Component {
  render() {

    const shoppingList = ['leite', 'arroz', 'feijão', 'banana', 'carne'];
    const items = shoppingList.map((item, index) => {
      return (<li key={ index }>{ item }</li>);
    });

    return (
      <div>
        <h2>Lista de Compras</h2>
        <ul>
          { items }
        </ul>
        <Greeting name="Raphael" lastName="Silva" />
      </div>
    );
  }
}

export default App;
