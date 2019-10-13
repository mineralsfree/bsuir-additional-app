import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';

import { rootSaga } from './rootSaga';
import { createRootReducer } from './rootReducer';
import history from '../helpers/history';

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
    createRootReducer(history),
    composeWithDevTools(
        applyMiddleware(
            routerMiddleware(history),
            sagaMiddleware,
        ),
    ),
);

store.runSaga = saga => {
    return sagaMiddleware.run(saga);
};

sagaMiddleware.run(rootSaga);
