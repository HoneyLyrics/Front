import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LoopCircleLoading } from 'react-loadingg';
import NoSong from '../../components/mood-list/NoSong';
import { listSongs } from '../../modules/songs';
import SongItem from '../../components/mood-list/SongItem';

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

  return (
    <>
      {loading ? (
        <div style={{ width: '100%', height: '489px' }}>
          <LoopCircleLoading color="#ffa500b5" />
        </div>
      ) : !moodSongs ? (
        <NoSong />
      ) : (
        <div className="song-list">
          {moodSongs.map(song => (
            <SongItem key={song.songId} song={song} />
          ))}
        </div>
      )}
    </>
  );
};

export default withRouter(SongListContainer);
