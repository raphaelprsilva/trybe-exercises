import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Album extends Component {
  render() {
    const {
      album: {
        title,
        image,
        releaseDate: { year },
        others: { recordCompany, formats },
      }
    } = this.props;

    return(
      <li className="album-card">
          <img src={ image } alt={ title } className="album-item-cover"/>
        <div className="album-item-card">
          <h3 className="album-item-title">Título: { title }</h3>
          <p>Record Company: { recordCompany }</p>
          <p>Release Year: { year }</p>
          <p>Format: { formats }</p>
        </div>
      </li>
    );
  }
}

Album.propTypes = {
  album: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.any,
    releaseDate: PropTypes.shape({
      year: PropTypes.string,
    }).isRequired,
    others: PropTypes.shape({
      recordCompany: PropTypes.string,
      formats: PropTypes.string,
    }).isRequired
  }).isRequired,
};

export default Album;
