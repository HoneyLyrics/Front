import React from 'react';
import { withRouter } from 'react-router-dom';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import SongDetailContainer from '../container/mood-detail/SongDetailContainer';

const MusicDetail = ({ match }) => {
  return (
    <>
      <Header detail />
      <SongDetailContainer songId={match.params.songid} />
      <Footer />
    </>
  );
};

export default withRouter(MusicDetail);
