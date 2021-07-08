import React from 'react';
import SongItem from './SongItem';

const SongList = ({ songs }) => {
  return (
    <div className="song-list">
      {songs.map(song => (
        <SongItem key={song.songId} song={song} />
      ))}
    </div>
  );
};

export default SongList;
