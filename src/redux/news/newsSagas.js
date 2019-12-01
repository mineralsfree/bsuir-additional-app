import { all, takeLatest, put, call } from 'redux-saga/effects';
import {NEWS_ACTION_TYPES} from "./newsConstants";
import {newsApi} from "../../api/newsApi";
import {error} from "../../helpers/toaster-helper";
import {newsActions} from "./newsSlice";

function* getNews({payload}) {
   const {page, newsAtPage} = payload;
   try {
       const response = yield newsApi.getNews(page, newsAtPage);
        yield put(newsActions.setNews(response.data))
   } catch (e) {
       if (e.message.includes('500'))
       error('Pankratiew server fucked up');
       else error('Something went wrong')

   }

}

function* sagas() {
    yield all([
        takeLatest(NEWS_ACTION_TYPES.GET, getNews),
    ]);
}
export  const  newsSagas = sagas;
