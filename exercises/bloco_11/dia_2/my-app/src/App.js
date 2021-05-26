import React from 'react';
import './App.css';
import Album from './components/Album';
import Greeting from './components/Greeting';
import Image from './components/Image';
import UserProfile from './components/UserProfile';

class App extends React.Component {
  render() {
    const joao = {
      id: 102,
      name: "João",
      email: "joao@gmail.com",
      avatar: "https:\/\/cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
    };
    // Declaração do objeto contendo informações do album01
    const album01 = {
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Coldplay_-_Mylo_Xyloto.JPG/220px-Coldplay_-_Mylo_Xyloto.JPG',
      title: 'Mylo Xyloto',
      releaseDate: {
        year: '2011',
        month: '10',
        day: '24',
      },
      others: {
        recordCompany: 'Capitol, Parlophone',
        formats: 'CD, digital'
      }
    };

    // Declaração do objeto contendo informações do album02
    const album02 = {
      image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/5/5d/Coldplay_-_Ghost_Stories.jpg/220px-Coldplay_-_Ghost_Stories.jpg',
      title: 'Ghost Stories',
      releaseDate: {
        year: '2014',
        month: '05',
        day: '16',
      },
      others: {
        recordCompany: 'Parlophone',
        formats: 'CD, digital'
      }
    };

    return (
      <section>
        <Greeting name="Raphael" lastName="Silva"/>
        <UserProfile user={ joao } />
        <Image
          source="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg"
          alternativeText="Cute cat staring"
          width="300"
          heigth="300"
        />
        <Album album={ album01 } />
        <Album album={ album02 } />
      </section>
    );
  }
}

export default App;
