import {all, takeLatest, put, call} from 'redux-saga/effects';
import {FILE_ACTION_TYPES} from './filesConstants'
import {filesApi} from "../../api/filesApi";
import {filesActions} from "./filesSlice";
import {error} from "../../helpers/toaster-helper";

function* getRoot() {
  try{
    const response = yield filesApi.getRoot();
    yield put(filesActions.setRoot(response.data));
  }
catch (e) {
  error(e);
  if (e.message.includes('500'))
    error('Pankratiew server fucked up');
  else error('Something went wrong')
}
}

function* sagas() {

  yield all([
    takeLatest(FILE_ACTION_TYPES.GET_ROOT, getRoot)
  ])
}

export const fileSagas = sagas;