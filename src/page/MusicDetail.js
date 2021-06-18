import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from '../../node_modules/axios/index';
import DetailHeader from '../components/DetailHeader';
import SongDetail from '../components/SongDetail';
import { LoopCircleLoading } from 'react-loadingg';
// import songes from '../asset/songs';

const MusicDetail = ({ match, songs }) => {
  // const song = songs.find(song => song.songId === match.params.songid * 1);
  // const song = songes[0].find(song => song.songId === match.params.songid);
  const [song, setSong] = useState(null);

  useEffect(() => {
    const getSongInfo = async () => {
      try {
        const response = await axios.get(
          `/song/?songid=${match.params.songid}`,
        );
        setSong(response.data);
      } catch (e) {
        console.log(e);
      }
    };

    getSongInfo();
  }, [match]);

  const songDetailBox = song ? (
    <SongDetail song={song} />
  ) : (
    <div style={{ width: '100%', height: '540px' }}>
      <LoopCircleLoading color="#ffa500b5" />
    </div>
  );

  return (
    <div>
      <DetailHeader />
      {songDetailBox}
    </div>
  );
};

export default withRouter(MusicDetail);
