import React from 'react';
import Footer from '../components/common/Footer';
import MoodList from '../components/mood-list/MoodList';
import HeaderContiner from '../container/common/HeaderContiner';

const Home = () => {
  return (
    <>
      <HeaderContiner />
      <MoodList />
      <Footer />
    </>
  );
};

export default Home;
