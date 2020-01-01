import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Routes } from '../const/Routes';
import {Header} from "./Header/Header";

export const AuthorizedRoute = props => {
    const { component: Component, isAuthorized, ...rest } = props;
    return (
        <Route
            {...rest}
            render={routeProps => {
                if (isAuthorized) {
                    return (
                        <>
                            <Header {...routeProps}/>
                            <Component {...routeProps} />
                        </>
                    );
                }
                return <Redirect to={Routes.EmptyRoute} />;
            }}
        />
    );
};
