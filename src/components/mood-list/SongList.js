import React from 'react';
import SongItem from './SongItem';
import { LoopCircleLoading } from 'react-loadingg';
import NoSong from '../mood-list/NoSong';

const SongList = ({ songs, loading }) => {
  if (loading) {
    return (
      <div style={{ width: '100%', height: '489px' }}>
        <LoopCircleLoading color="#ffa500b5" />
      </div>
    );
  }

  if (!songs) {
    return <NoSong />;
  }

  return (
    <div className="song-list">
      {songs.map(song => (
        <SongItem key={song.songId} song={song} />
      ))}
    </div>
  );
};

export default SongList;
