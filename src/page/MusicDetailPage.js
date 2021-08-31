import React from 'react';
import { withRouter } from 'react-router-dom';
import Footer from '../components/common/Footer';
import SongDetailContainer from '../container/mood-detail/SongDetailContainer';
import HeaderContiner from '../container/common/HeaderContiner';

const MusicDetail = ({ match }) => {
  return (
    <>
      <HeaderContiner detail />
      <SongDetailContainer songId={match.params.songid} />
      <Footer />
    </>
  );
};

export default withRouter(MusicDetail);
