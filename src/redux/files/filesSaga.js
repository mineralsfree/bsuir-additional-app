import {all, takeLatest, put} from 'redux-saga/effects';
import {FILE_ACTION_TYPES} from './filesConstants'
import {filesApi} from "../../api/filesApi";
import {filesActions} from "./filesSlice";
import {errorToast} from "../../components/common/Toast/Toast";

function* getDir({type, payload}) {
  try{
    const response = yield filesApi.getDir(payload);
    yield put(filesActions.setDir(response.data));
  }
catch (e) {
  errorToast(e);
  if (e.message.includes('500'))
    errorToast('Pankratiew server fucked up');
  else errorToast('Something went wrong')
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
