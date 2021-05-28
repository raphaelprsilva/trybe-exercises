import React from 'react';
import Image from '../Image';
import './style.css';

class Album extends React.Component {
  render() {
    return (
      <section className="album-item">
        <div className="album-item-card">
          <h2>{ this.props.album.title }</h2>
          <Image
            source={ this.props.album.image }
            alternativeText= { this.props.album.title }
          />
          {/* <img src={ this.props.album.image } alt={ this.props.album.title } /> */}
          <p>Lançamento: { this.props.album.releaseDate.year }</p>
          <p>Gravadora: { this.props.album.others.recordCompany }</p>
          <p>Formatos: { this.props.album.others.formats }</p>
        </div>
      </section>
    );
  }
}

export default Album;
