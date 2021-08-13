import React from 'react';
import Album from './components/Album';
import { albums } from './data';

class App extends React.Component {
  render() {
    return (
      <div>
        {albums.map((album, index) => (
          <div key={index}>
            <Album album={album} />
          </div>
        ))}
      </div>
    );
  }
}

export default App;
