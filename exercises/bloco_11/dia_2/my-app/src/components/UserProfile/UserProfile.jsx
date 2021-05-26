import React from 'react';
import Image from '../Image';

class UserProfile extends React.Component {
  render() {
    return (
      <div>
        <p>Name: { this.props.user.name }</p>
        <p>E-mail: { this.props.user.email }</p>
        <Image
          source= { this.props.user.avatar }
          alternativeText= { this.props.user.name }
          width= '300'
          heigth= '300'
        />
      </div>
    );
  }
}

export default UserProfile;