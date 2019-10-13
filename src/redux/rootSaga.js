import { all, fork } from 'redux-saga/effects';

import { authSagas } from './auth/authSaga';


export const rootSaga = function* rootSaga() {
  yield all([
    fork(authSagas),
  ]);
};
