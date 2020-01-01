import { all, takeLatest, put } from 'redux-saga/effects';
import {error} from "../../helpers/toaster-helper";
import {freeAudApi} from "../../api/freeAudApi";
import {FREE_AUDS_ACTION_TYPES} from "./freeAudConstants";
import {freeAudActions} from './freeAudSlice'
function* getFreeAuds({payload}) {
    const {building, floor, date, time } = payload;
    try {
        const response = yield freeAudApi.getFreeAuds(building, floor, date, time );
        yield put(freeAudActions.setFreeAuds( response.data))
    } catch (e) {
        if (e.message.includes('500')){
            error('Pankratiew server fucked up');
            console.log(e);
        }
        else{
            console.log(e);
            error('Something went wrong')
        }
    }
}

function* sagas() {
    yield all([
        takeLatest(FREE_AUDS_ACTION_TYPES.GET, getFreeAuds),
    ]);
}
export  const  FreeAudsSagas = sagas;
