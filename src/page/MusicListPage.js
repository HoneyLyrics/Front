import React from 'react';
import { withRouter } from 'react-router-dom';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import SongListContainer from '../container/mood-list/SongListContainer';

const MusicList = ({ match }) => {
  return (
    <>
      <Header />
      <SongListContainer moodId={match.params.moodid} />
      <Footer />
    </>
  );
};

export default withRouter(MusicList);
