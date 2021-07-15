import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from '../../node_modules/axios/index';
import DetailHeader from '../components/mood-detail/DetailHeader';
import SongDetail from '../components/mood-detail/SongDetail';
import { LoopCircleLoading } from 'react-loadingg';

const MusicDetail = ({ match }) => {
  const [song, setSong] = useState(null);

  useEffect(() => {
    const getSongInfo = async () => {
      try {
        const response = await axios.get(
          // `https://honeylyrics.herokuapp.com/song/?songid=${match.params.songid}`,
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
