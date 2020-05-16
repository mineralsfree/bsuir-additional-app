import {all, takeLatest, put} from 'redux-saga/effects';
import {NEWS_ACTION_TYPES} from "./newsConstants";
import {newsApi} from "../../api/newsApi";
import {error} from "../../helpers/toaster-helper";
import {newsActions} from "./newsSlice";

function* getSources() {
  try {
    const response = yield newsApi.getSources();
    yield put(newsActions.setSources(response.data));

  } catch (e) {
    error(e)
  }
}

function* putSources({payload}) {
  try {
    yield newsApi.putSources(payload)
    const newSubs = yield newsApi.getMySources()
    yield put(newsActions.putMySources(newSubs.data))
  } catch (e) {
    error(e);
  }
}

function* getMySources() {
  try {
    const response = yield newsApi.getMySources();
    yield put(newsActions.clearNews())
    yield put(newsActions.putMySources(response.data));
  } catch (e) {
    error(e);
  }

}

function* getNews({payload}) {
  const {page, newsAtPage, mySources} = payload;
  try {
    const response = yield newsApi.getNews(page, newsAtPage, mySources);
    yield put(newsActions.setNews(response.data))
  } catch (e) {
    error(e);
    if (e.message.includes('500'))
      error('Pankratiew server fucked up');
    else error('Something went wrong')
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
