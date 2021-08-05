import React, { Component } from 'react';
import { connect } from 'react-redux';

class Clients extends Component {
  render() {
    const { user } = this.props;
    const { email } = user;
    if (!email) return <div>Login não efetuado!</div>;
    return (
      <div>
        Clients
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.reducer.user,
});

export default connect(mapStateToProps, null)(Clients);
