import React from 'react';
import Image from '../Image';
import './style.css';

class UserProfile extends React.Component {
  render() {
    return (
      <div className="user-profile">
        <div className="user-profile-card">
          <p>Name: { this.props.user.name }</p>
          <p>E-mail: { this.props.user.email }</p>
          <Image
            source= { this.props.user.avatar }
            alternativeText= { this.props.user.name }
            width= '300'
            heigth= '300'
          />
        </div>
      </div>
    );
  }
}

export default UserProfile;