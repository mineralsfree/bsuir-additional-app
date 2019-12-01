import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth/authSlice';
import newsReducer from './news/newsSlice'

export const createRootReducer = history =>
    combineReducers({
        form: formReducer,
        router: connectRouter(history),
        auth: authReducer,
        news: newsReducer

    });
