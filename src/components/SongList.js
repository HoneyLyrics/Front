import React, { useEffect, useState } from 'react';
import SongItem from './SongItem';
import songes from '../asset/songs';
import axios from '../../node_modules/axios/index';

const SongList = ({ moodid }) => {
  const [loading, setLoading] = useState(false);
  const [songs, setSongs] = useState(null);

  useEffect(() => {
    const fn = async () => {
      setLoading(true);
      try {
        const res = await axios.get('/musiclist/?moodid=1');
        console.log(res.data);
        setSongs(res.data);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fn();
  }, []);

  const songs2 = songes[Number(moodid) - 1];

  return (
    <div className="song-list">
      {songs2.map(song => (
        <SongItem key={song.songId} song={song} />
      ))}
    </div>
  );
};

export default SongList;
