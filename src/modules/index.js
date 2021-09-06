import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import user, { userSaga } from './user';
import loading from './loading';
import songs, { songsSaga } from './songs';
import song, { songSaga, youtubeSaga } from './song';

const rootReducer = combineReducers({ auth, user, loading, songs, song });

export function* rootSaga() {
  yield all([authSaga(), userSaga(), songsSaga(), songSaga(), youtubeSaga()]);
}

export default rootReducer;
