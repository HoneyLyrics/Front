import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestActionTypes from '../lib/createRequestActionTypes';
import createRequestSaga from '../lib/createRequestSaga';
import * as songAPI from '../lib/api/song';

const [GET_SONG, GET_SONG_SUCCESS, GET_SONG_FAILURE] =
  createRequestActionTypes('song/GET_SONG');
const [RELATE_YOUTUBE, RELATE_YOUTUBE_SUCCESS, RELATE_YOUTUBE_FAILURE] =
  createRequestActionTypes('song/RELATE_YOUTUBE');

export const getSong = createAction(GET_SONG, id => id);
export const relateYoutube = createAction(RELATE_YOUTUBE, (singer, title) => ({
  singer,
  title,
}));

const getSongSaga = createRequestSaga(GET_SONG, songAPI.song);
export function* songSaga() {
  yield takeLatest(GET_SONG, getSongSaga);
}

const relateYoutubeSaga = createRequestSaga(RELATE_YOUTUBE, songAPI.youtubes);
export function* youtubeSaga() {
  yield takeLatest(RELATE_YOUTUBE, relateYoutubeSaga);
}

const initialState = {
  song: null,
  youtubes: null,
  songError: null,
  youtubeError: null,
};

const song = handleActions(
  {
    [GET_SONG_SUCCESS]: (state, { payload: song }) => ({
      ...state,
      song: song[0],
    }),
    [GET_SONG_FAILURE]: (state, { payload: songError }) => ({
      ...state,
      songError,
    }),
    [RELATE_YOUTUBE_SUCCESS]: (state, { payload: youtubes }) => ({
      ...state,
      youtubes,
    }),
    [RELATE_YOUTUBE_FAILURE]: (state, { payload: youtubeError }) => ({
      ...state,
      youtubeError,
    }),
  },
  initialState,
);

export default song;
