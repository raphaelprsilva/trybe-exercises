import React from 'react';
import './App.css';
import AlbumList from './components/AlbumList/AlbumList';
import Footer from './components/Footer';
import Header from './components/Header';
import Data from './data';

class App extends React.Component {
  render () {
    return (
      <main>
        <Header />
        <AlbumList albums={Data} />
        <Footer />
      </main>
    );
  }
}

export default App;
