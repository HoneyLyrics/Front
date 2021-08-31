import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SongDetail from '../../components/mood-detail/SongDetail';
import { getSong } from '../../modules/song';

const MusicDetail = ({ songId }) => {
  const dispatch = useDispatch();
  const { song, loading } = useSelector(({ song, loading }) => ({
    song: song.song,
    loading: loading['song/GET_SONG'],
  }));

  useEffect(() => {
    dispatch(getSong(songId));
  }, [dispatch, songId]);

  return <SongDetail song={song} loading={loading} />;
};

export default withRouter(MusicDetail);
