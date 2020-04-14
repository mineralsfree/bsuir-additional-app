import {all, takeLatest, put} from 'redux-saga/effects';
import {FILE_ACTION_TYPES} from './filesConstants'
import {filesApi} from "../../api/filesApi";
import {filesActions} from "./filesSlice";
import {error} from "../../helpers/toaster-helper";

function* getDir({type, payload}) {
  try{
    const response = yield filesApi.getDir(payload);
    yield put(filesActions.setDir(response.data));
  }
catch (e) {
  error(e);
  if (e.message.includes('500'))
    error('Pankratiew server fucked up');
  else error('Something went wrong')
}
}
//function* changeDir({type, payload}) {

//}

function* sagas() {

  yield all([
    takeLatest(FILE_ACTION_TYPES.GET_DIR, getDir)
  ])
}

export const fileSagas = sagas;
