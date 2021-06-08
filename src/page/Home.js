import React from 'react';
import Header from '../components/Header';
import Searchbar from '../components/Searchbar';
import MoodList from '../components/MoodList';

const Home = () => {
  return (
    <div>
      <Header />
      <Searchbar />
      <MoodList />
    </div>
  );
};

export default Home;
