import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from '../../node_modules/axios/index';
import DetailHeader from '../components/DetailHeader';
import SongDetail from '../components/SongDetail';
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

  if (!song) {
    return <div>노래 정보 없음</div>;
  }

  return (
    <div>
      <DetailHeader />
      <SongDetail song={song} />
    </div>
  );
};

export default withRouter(MusicDetail);
