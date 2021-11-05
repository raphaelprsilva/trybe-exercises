import React, { Component } from 'react';

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state= {
      name: '',
      email: '',
      favoriteFruit: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    console.log('name:', name);
    console.log('value:', value);

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { name, email } = this.state;
    return (
      <div>
        <form>
          <label>
            Name:
            <input
              name="name"
              type="text"
              value={ name }
              onChange={ this.handleChange } />
          </label>
          <label>
            E-mail:
            <input
              name="email"
              type="text"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>
          <label>
            Fruta favorita:
            <select>
              <option value="laranja">Laranja</option>
              <option value="banana">Banana</option>
            </select>
          </label>
        </form>
      </div>
    )
  }
}
