import React, { Component } from 'react';
import PersonCard from './PersonCard';

export default class RandomUser extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      storedUsers: [],
    };

    this.fetchRandomUser = this.fetchRandomUser.bind(this);
    this.getUserElements = this.getUserElements.bind(this);
  }

  // Faz a requisição para a API
  async fetchRandomUser() {
    this.setState(
      { loading: true },
      async () => {
        const requestReturn = await fetch('https://api.randomuser.me/');
        const requestObject = await requestReturn.json();
        this.setState({
          loading: false,
          storedUsers: requestObject.results,
        });
      }
    );
  }

  componentDidMount() {
    this.fetchRandomUser();
  }

  getUserElements(user) {
    return {
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      age: user.dob.age,
      image: user.picture.medium,
    };
  }

  render() {
    const { loading, storedUsers } = this.state;
    const loadingElement = <span>Loading...</span>

    if(loading) return loadingElement;
    return (
      <div>
        {storedUsers.map((currentUser, index) => (
          <PersonCard key={index} person={ this.getUserElements(currentUser)} />
        ))}
      </div>
    );
  }
}
