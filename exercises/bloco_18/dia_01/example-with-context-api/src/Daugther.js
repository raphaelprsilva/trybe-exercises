import React, { Component } from 'react';
import MyContext from './MyContext';

export default class Daugther extends Component {
  render() {
    return (
      <div style={ {border: '1px solid blue'} }>
        <h3>I'm Daugther</h3>
        <MyContext.Consumer>
          {
            (value) => (
              <>
                <p>
                  {
                    `I want spend my grandfather's money. He has: ${ value.money }`
                  }
                </p>
                <button type="button" onClick={ value.spendMoney }>Spend $100.00 on Click</button>
              </>
            )
          }
        </MyContext.Consumer>
      </div>
    );
  }
}
