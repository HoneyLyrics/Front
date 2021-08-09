import { createAction, handleActions } from 'redux-actions';
import createRequestActionTypes from '../lib/createRequestActionTypes';
import createRequestSaga from '../lib/createRequestSaga';
import * as authAPI from '../lib/api/auth';
import { takeLatest } from 'redux-saga/effects';

const TEMP_SET_USER = 'user/TEMP_SET_USER';
const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] =
  createRequestActionTypes('user/CHECK');
const LOGOUT = 'user/LOGOUT';

export const tempSetUser = createAction(TEMP_SET_USER, user => user);
export const check = createAction(CHECK);
export const logout = createAction(LOGOUT);

const checkSaga = createRequestSaga(CHECK, authAPI.check);
export function* userSaga() {
  yield takeLatest(CHECK, checkSaga);
}

const initialStata = {
  user: null,
  checkError: null,
};

export default handleActions(
  {
    [TEMP_SET_USER]: (state, { payload: user }) => ({
      ...state,
      user,
    }),
    [CHECK_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      user,
      checkError: null,
    }),
    [CHECK_FAILURE]: (state, { payload: error }) => ({
      ...state,
      checkError: error,
    }),
    [LOGOUT]: state => ({
      ...state,
      user: null,
    }),
  },
  initialStata,
);
