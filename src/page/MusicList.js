import React from 'react';
import Header from '../components/Header';
import Searchbar from '../components/Searchbar';
import SongList from '../components/SongList';

const MusicList = ({ match }) => {
  return (
    <div>
      <Header />
      <Searchbar />
      <SongList moodid={match.params.moodid} />
    </div>
  );
};

export default MusicList;
