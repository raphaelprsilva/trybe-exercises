import React, { Component } from 'react'
import Mother from './Mother';
import MyContext from './MyContext';

export default class Grandfather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      money: 100000,
    };

    this.spendMoney = this.spendMoney.bind(this);
  }

  spendMoney() {
    this.setState((prevState) => ({ money: prevState.money - 100 }))
  }

  render() {
    const { money } = this.state;
    const { spendMoney } = this;

    const contextValue = {
      money,
      spendMoney,
    };

    return (
      <MyContext.Provider value={ contextValue } >
        <div style={ {border: '1px solid black'} }>
          <h1>Eu sou o Grandfather</h1>
          <p>{ `My money at bank: ${ money }`}</p>
          <Mother />
        </div>
      </MyContext.Provider>
    )
  }
}
