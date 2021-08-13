import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Album extends Component {
  render() {
    const { album } = this.props;
    const { title, image, releaseDate, others } = album;
    const { day, month, year } = releaseDate;
    const { recordCompany, formats } = others;
    return (
      <>
        <h2>Title: {title}</h2>
        <img src={image} alt={title} />
        <div>
          <h4>Release Date</h4>
          <div>
            <span>{day}/</span>
            <span>{month}/</span>
            <span>{year}</span>
          </div>
        </div>
        <p>Record Company: {recordCompany}</p>
        <p>Format: {formats}</p>
      </>
    );
  }
}

Album.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  day: PropTypes.string,
  month: PropTypes.string,
  year: PropTypes.string,
  recordCompany: PropTypes.string,
  formats: PropTypes.string,
}.isRequired;
