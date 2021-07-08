import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from '../../node_modules/axios/index';
import Header from '../components/Header';
import SongList from '../components/SongList';
import { LoopCircleLoading } from 'react-loadingg';
import NoSong from '../components/NoSong';

const MusicList = ({ match, songs, setSongs }) => {
  const moodId = match.params.moodid;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getSongList = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://honeylyrics.herokuapp.com/musiclist/?moodid=${moodId}`,
        );
        setSongs(response.data);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };

    getSongList();

    return () => setLoading(true);
  }, [moodId, setSongs]);

  const songListComponent = loading ? (
    <div style={{ width: '100%', height: '489px' }}>
      <LoopCircleLoading color="#ffa500b5" />
    </div>
  ) : !songs ? (
    <NoSong />
  ) : (
    <SongList songs={songs} />
  );

  return (
    <div>
      <Header />
      {songListComponent}
    </div>
  );
};

export default withRouter(MusicList);
