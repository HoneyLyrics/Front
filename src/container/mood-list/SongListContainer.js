import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listSongs } from '../../modules/songs';
import SongList from '../../components/mood-list/SongList';

const SongListContainer = ({ moodId }) => {
  const dispatch = useDispatch();
  const { songs, loading } = useSelector(({ songs, loading }) => ({
    songs: songs.songs,
    error: songs.error,
    loading: loading['songs/LIST_SONGS'],
  }));
  const moodSongs = songs?.[moodId];

  useEffect(() => {
    if (!songs?.[moodId]) {
      dispatch(listSongs(moodId));
    }
  }, [dispatch, songs, moodId]);

  return <SongList songs={moodSongs} loading={loading} />;
};

export default withRouter(SongListContainer);
