import React, { useEffect, useState } from 'react';
import SongItem from './SongItem';
// import songes from '../asset/songs';
import axios from '../../node_modules/axios/index';

const SongList = ({ moodid }) => {
  const [loading, setLoading] = useState(false);
  const [songs, setSongs] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fn = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`/musiclist/?moodid=${moodid}`);
        setSongs(res.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fn();
  }, [moodid]);

  // const songs2 = songes[Number(moodid) - 1];

  if (loading) {
    return <div>불러오는 중...</div>;
  }

  if (!songs) {
    return null;
  }

  if (error) {
    return <div>에러 발생{error}</div>;
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
