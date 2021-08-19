import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../components/common/Header';
import SongListContainer from '../container/mood-list/SongListContainer';

const MusicList = ({ match }) => {
  return (
    <div>
      <Header />
      <SongListContainer moodId={match.params.moodid} />
    </div>
  );
};

export default withRouter(MusicList);
