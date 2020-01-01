import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {store} from './redux/store';
import history from './helpers/history';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ConnectedRouter} from "connected-react-router";
ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Router history={history}>
                <App/>
            </Router>
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
