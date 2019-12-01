import { all, fork } from 'redux-saga/effects';

import { authSagas } from './auth/authSaga';
import {newsSagas} from './news/newsSagas';

export const rootSaga = function* rootSaga() {
  yield all([
    fork(authSagas),
    fork(newsSagas)
  ]);
};
