import React from 'react';
import { withRouter } from 'react-router-dom';
import DetailHeader from '../components/mood-detail/DetailHeader';
import SongDetailContainer from '../container/mood-detail/SongDetailContainer';

const MusicDetail = ({ match }) => {
  return (
    <div>
      <DetailHeader />
      <SongDetailContainer songId={match.params.songid} />
    </div>
  );
};

export default withRouter(MusicDetail);
