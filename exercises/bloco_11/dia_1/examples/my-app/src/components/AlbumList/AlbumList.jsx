import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Album from '../Album/Album';

class AlbumList extends Component {
  render() {
    const { albums } = this.props;
    return (
      <ul className="album-list">
        {albums.map((album) => <Album key={album.title} album={album}/>)}
      </ul>
    );
  }
}

AlbumList.propTypes = {
  albums: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AlbumList;