import './App.scss';


import React from 'react';
import { connect } from 'react-redux';
import { Switch, Redirect } from 'react-router-dom';

import {AuthPage} from './components/auth/auth';

import {Home} from './components/home/Home';
import { Routes } from './const/Routes';

import { AuthorizedRoute } from './components/AuthorizedRoute';
import { NonAuthorizedRoute } from './components/NonAuthorizedRoute';

import { isAuthorizedSelector } from './redux/auth/authSelectors';

function App(props) {
  const { isAuthorized, location } = props;

    return (
        <div className={`theme}`}>
          <Switch location={location}>
            <NonAuthorizedRoute exact={true} path={'/'} component={AuthPage} isAuthorized={isAuthorized} />
            <AuthorizedRoute path={Routes.MainRoute} component={Home} isAuthorized={isAuthorized} withNavigation />
            <Redirect to={Routes.MainRoute} />
          </Switch>
        </div>
    );

}

const mapStateToProps = state => ({
  isAuthorized: isAuthorizedSelector(state),
});

export default connect(mapStateToProps)(App);
