import React, { Component } from 'react'
import Mother from './Mother';

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
    return (
      <div style={ {border: '1px solid black'} }>
        <h1>Eu sou o Grandfather</h1>
        <p>{ `My money at bank: ${ money }`}</p>
        <div>
          <Mother money={ money } spendMoney={ spendMoney } />
        </div>
      </div>
    )
  }
}
