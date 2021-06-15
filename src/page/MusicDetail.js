import React from 'react';
import DetailHeader from '../components/DetailHeader';
import SongDetail from '../components/SongDetail';

const MusicDetail = ({ match }) => {
  return (
    <div>
      <DetailHeader />
      <SongDetail songid={match.params.songid} />
    </div>
  );
};

export default MusicDetail;
