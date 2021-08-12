import React, { Component } from 'react';

export default class Daugther extends Component {
  render() {
    const { money, spendMoney } = this.props;
    return (
      <div style={ {border: '1px solid blue'} }>
        <h3>I'm Daugther</h3>
        <p>
          {
            `I want spend my grandfather's money. He has: ${ money }`
          }
        </p>
        <button type="button" onClick={ spendMoney }>Spend $100.00 on Click</button>
      </div>
    );
  }
}
