import './App.scss';


import React from 'react';
import { connect } from 'react-redux';
import { Switch, Redirect } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';

import {AuthPage} from './components/auth/auth';

import {News} from './components/News/News';
import { Routes } from './const/Routes';

import { AuthorizedRoute } from './components/AuthorizedRoute';
import { NonAuthorizedRoute } from './components/NonAuthorizedRoute';

import { isAuthorizedSelector } from './redux/auth/authSelectors';
import {FreeRooms} from "./components/FreeRooms/FreeRooms";
import {ProfilePage} from "./components/Profile-page/ProfilePage";
import {FilesPage} from "./components/Files/FilesPage";
import {Rating} from "./components/rating/Rating";
import {ContactsPage} from "./components/Contacts/ContactsPage"

function App(props) {
  const { isAuthorized, location } = props;
    return (
        <div className={`theme`}>
            <ToastContainer/>
          <Switch location={location}>
              <NonAuthorizedRoute exact={true} path={'/contact'} component={ContactsPage} isAuthorized={isAuthorized} />
              <NonAuthorizedRoute exact={true} path={'/'} component={AuthPage} isAuthorized={isAuthorized} />
              <AuthorizedRoute path={Routes.MainRoute} component={News} isAuthorized={isAuthorized} withNavigation />
              <AuthorizedRoute path={Routes.FreeRooms} component={FreeRooms} isAuthorized={isAuthorized} withNavigation />
              <AuthorizedRoute path={Routes.Erud} component={News} isAuthorized={isAuthorized} withNavigation />
              <AuthorizedRoute path={Routes.Files} component={FilesPage} isAuthorized={isAuthorized} withNavigation />
              <AuthorizedRoute path={Routes.Rating} component={Rating} isAuthorized={isAuthorized} withNavigation />
              <AuthorizedRoute path={Routes.Profile} component={ProfilePage} isAuthorized={isAuthorized} withNavigation />
              <Redirect to={Routes.MainRoute} />
          </Switch>
        </div>
    );

}

const mapStateToProps = state => ({
  isAuthorized: isAuthorizedSelector(state),
});

export default connect(mapStateToProps)(App);
