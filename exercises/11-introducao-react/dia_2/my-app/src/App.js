import React from 'react';
import './App.css';
import AlbumTable from './components/AlbumTable/AlbumTable';
import Greeting from './components/Greeting';
import UserProfile from './components/UserProfile';

class App extends React.Component {
  render() {
    const joao = {
      id: 102,
      name: "João",
      email: "joao@gmail.com",
      avatar: "https:\/\/cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
    };

    return (
      <section>
        <Greeting name="Raphael" lastName="Silva"/>
        <UserProfile user={ joao } />
        <AlbumTable />
      </section>
    );
  }
}

export default App;
