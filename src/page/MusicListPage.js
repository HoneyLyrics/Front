import React from 'react';
import { withRouter } from 'react-router-dom';
import Footer from '../components/common/Footer';
import SongListContainer from '../container/mood-list/SongListContainer';
import HeaderContiner from '../container/common/HeaderContiner';

const MusicList = ({ match }) => {
  return (
    <>
      <HeaderContiner />
      <SongListContainer moodId={match.params.moodid} />
      <Footer />
    </>
  );
};

export default withRouter(MusicList);
