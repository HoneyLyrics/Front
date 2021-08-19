import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SongDetail from '../../components/mood-detail/SongDetail';
import { getSong } from '../../modules/song';

const MusicDetail = ({ songId }) => {
  const dispatch = useDispatch();
  const { song } = useSelector(({ song }) => ({
    song: song.song,
  }));

  useEffect(() => {
    dispatch(getSong(songId));
  }, [dispatch, songId]);

  return <SongDetail song={song} />;
};

export default withRouter(MusicDetail);
