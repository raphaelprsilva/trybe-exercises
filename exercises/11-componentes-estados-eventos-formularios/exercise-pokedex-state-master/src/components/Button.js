import React, { Component } from 'react';

class Button extends Component {
  // constructor () {
  //   super();

  //   this.state = {

  //   };
  // }

  render() {
    const { name } = this.props;
    return (
      <button>
        {name}
      </button>
    )
  }
}

export default Button;
