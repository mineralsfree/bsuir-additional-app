import {all, takeLatest, put} from 'redux-saga/effects';
import {USER_ACTION_TYPES} from "./userConstants";
import {userApi} from "../../api/userApi";
import {errorToast} from "../../components/common/Toast/Toast";
import {userActions} from "./userSlice";

function* getUser({payload}) {
  try {
    const response = yield userApi.getUser();
    yield put(userActions.setUser(response.data))
  } catch (e) {
    if (e.message.includes('500'))
      errorToast('Pankratiew server fucked up');
    else errorToast('Something went wrong')
  }
}

function* getMarks({payload}) {
  try {
    const response = yield userApi.getRecordBook();
    yield put(userActions.setMarks(response.data))
  } catch (e) {
    if (e.message.includes('500'))
      errorToast('Pankratiew server fucked up');
    else errorToast('Something went wrong')
  }
}

function* sagas() {
  yield all([
    takeLatest(USER_ACTION_TYPES.GET_RECORDBOOK, getMarks),
    takeLatest(USER_ACTION_TYPES.GET_USER, getUser),
  ]);
}

export const userSagas = sagas;
