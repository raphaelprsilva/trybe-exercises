import React, { Component } from 'react';
import Daugther from './Daugther';

export default class Mother extends Component {
  render() {
    const { money, spendMoney } = this.props;
    return (
      <div style={ {border: '1px solid red'} }>
        <h2>I'm Mother</h2>
        <div>
          <Daugther money={ money } spendMoney={ spendMoney } />
        </div>
      </div>
    );
  }
}
