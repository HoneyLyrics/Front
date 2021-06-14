import React from 'react';
import songs from '../asset/songs';
import DetailHeader from '../components/DetailHeader';
import SongDetail from '../components/SongDetail';

const MusicDetail = () => {
  const song = songs[0];
  return (
    <div>
      <DetailHeader />
      <SongDetail song={song} />
    </div>
  );
};

export default MusicDetail;
