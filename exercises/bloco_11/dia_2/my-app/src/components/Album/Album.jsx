import React from 'react';
import Image from '../Image';

class Album extends React.Component {
  render() {
    return (
      <section>
        <Image
          source={ this.props.album.image }
          alternativeText= { this.props.album.title }
        />
        {/* <img src={ this.props.album.image } alt={ this.props.album.title } /> */}
        <h2>{ this.props.album.title }</h2>
        <p>Lançamento: { this.props.album.releaseDate.year }</p>
        <p>Gravadora: { this.props.album.others.recordCompany }</p>
        <p>Formatos: { this.props.album.others.formats }</p>
      </section>
    );
  }
}

export default Album;
