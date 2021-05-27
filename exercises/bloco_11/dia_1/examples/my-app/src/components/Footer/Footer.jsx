import React, { Component } from 'react';
import '../Footer/style.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer-content">
        <p>Author: Raphael Silva</p>
        <p><a href="mailto:raphael@gmail.com">raphaelprsilva@gmail.com</a></p>
      </footer>
    );
  }
}

export default Footer;