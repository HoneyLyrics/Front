import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestActionTypes from '../lib/createRequestActionTypes';
import createRequestSaga from '../lib/createRequestSaga';
import { songs as songsAPI } from '../lib/api/song';

const [LIST_SONGS, LIST_SONGS_SUCCESS, LIST_SONGS_FAILURE] =
  createRequestActionTypes('songs/LIST_SONGS');

export const listSongs = createAction(LIST_SONGS, id => id);

const listSongsSaga = createRequestSaga(LIST_SONGS, songsAPI);
export function* songsSaga() {
  yield takeLatest(LIST_SONGS, listSongsSaga);
}

const initialState = {
  songs: null,
  error: null,
};

const songs = handleActions(
  {
    [LIST_SONGS_SUCCESS]: (state, { payload: songs, action: moodId }) => ({
      ...state,
      songs: {
        ...state.songs,
        [moodId]: songs,
      },
    }),
    [LIST_SONGS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default songs;
