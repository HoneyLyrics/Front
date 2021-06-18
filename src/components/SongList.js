import React from 'react';
import SongItem from './SongItem';
// import songes from '../asset/songs';

const SongList = ({ songs }) => {
  // const songs2 = songes[0];

  return (
    <div className="song-list">
      {songs.map(song => (
        <SongItem key={song.songId} song={song} />
      ))}
    </div>
  );
};

export default SongList;
