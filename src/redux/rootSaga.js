import { all, fork } from 'redux-saga/effects';

import { authSagas } from './auth/authSaga';
import {newsSagas} from './news/newsSagas';
import {FreeAudsSagas} from './freeAud/freeAudSaga'
import {userSagas} from './user/userSagas'
import {fileSagas} from "./files/filesSaga";
export const rootSaga = function* rootSaga() {
  yield all([
    fork(authSagas),
    fork(newsSagas),
    fork(FreeAudsSagas),
    fork(userSagas),
    fork(fileSagas)
  ]);
};
