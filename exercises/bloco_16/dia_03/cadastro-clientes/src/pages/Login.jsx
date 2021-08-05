import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUserCreator } from '../redux/actions';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  onSubmitForm() {
    const { history, loginUser } = this.props;
    loginUser(this.state);
    history.push('/clients');
  }

  render() {
    const { email, password } = this.state;
    return (
      // <form onSubmit={ this.onSubmitForm }>
      //   <label htmlFor="email">
      //     Email:
      //     <input
      //       type="email"
      //       name="email"
      //       placeholder="nome@gmail.com"
      //       value={ email }
      //       onChange={ this.handleChange }
      //       required
      //     />
      //   </label>
      //   <label htmlFor="password">
      //     Senha:
      //     <input
      //       type="password"
      //       name="password"
      //       value={ password }
      //       onChange={ this.handleChange }
      //       required
      //     />
      //   </label>
      //   <button type="submit">Login</button>
      // </form>
        <div>
          <div>
            <label htmlFor="email">
              Email:
              <input
                type="email"
                name="email"
                placeholder="nome@gmail.com"
                value={ email }
                onChange={ this.handleChange }
                required
              />
            </label>
            <label htmlFor="password">
              Senha:
              <input
                type="password"
                name="password"
                value={ password }
                onChange={ this.handleChange }
                required
              />
            </label>
          </div>
          <div>
            <button type="button" onClick={ this.onSubmitForm }>Login</button>
          </div>
        </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  loginUser: (infos) => dispatch(loginUserCreator(infos)),
});

export default connect(null, mapDispatchToProps)(Login);
