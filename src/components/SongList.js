import React from 'react';
import SongItem from './SongItem';
import songes from '../asset/songs';

const SongList = ({ moodid }) => {
  // 여기서 api 처리
  const songs = songes[Number(moodid) - 1];

  return (
    <div className="song-list">
      {songs.map(song => (
        <SongItem key={song.songId} song={song} />
      ))}
    </div>
  );
};

export default SongList;
