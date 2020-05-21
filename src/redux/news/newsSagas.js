import {all, takeLatest, put} from 'redux-saga/effects';
import {NEWS_ACTION_TYPES} from "./newsConstants";
import {newsApi} from "../../api/newsApi";
import {errorToast} from "../../components/common/Toast/Toast";
import {newsActions} from "./newsSlice";

function* getSources() {
  try {
    const response = yield newsApi.getSources();
    yield put(newsActions.setSources(response.data));

  } catch (e) {
    errorToast(e)
  }
}

function* putSources({payload}) {
  try {
    yield newsApi.putSources(payload)
    const newSubs = yield newsApi.getMySources()
    yield put(newsActions.putMySources(newSubs.data))
  } catch (e) {
    errorToast(e);
  }
}

function* getMySources() {
  try {
    const response = yield newsApi.getMySources();
    yield put(newsActions.clearNews())
    yield put(newsActions.putMySources(response.data));
  } catch (e) {
    errorToast(e);
  }

}

function* getNews({payload}) {
  const {page, newsAtPage, mySources} = payload;
  try {
    const response = yield newsApi.getNews(page, newsAtPage, mySources);
    yield put(newsActions.setNews(response.data))
  } catch (e) {
    errorToast(e);
    if (e.message.includes('500'))
      errorToast('Pankratiew server fucked up');
    else errorToast('Something went wrong')
  }
}

function* sagas() {
  yield all([
    takeLatest(NEWS_ACTION_TYPES.GET, getNews),
    takeLatest(NEWS_ACTION_TYPES.GET_SOURCES, getSources),
    takeLatest(NEWS_ACTION_TYPES.PUT_SOURCES, putSources),
    takeLatest(NEWS_ACTION_TYPES.GET_MY_SOURCES, getMySources)
  ]);
}

export const newsSagas = sagas;
