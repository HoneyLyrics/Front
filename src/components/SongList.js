import React from 'react';
import SongItem from './SongItem';
import songs from '../asset/songs';

const SongList = () => {
  return (
    <div className="song-list">
      {songs.map(song => (
        <SongItem key={song.songId} song={song} />
      ))}
    </div>
  );
};

export default SongList;
