import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Routes } from '../const/Routes';

export const AuthorizedRoute = props => {
    const { component: Component, isAuthorized, ...rest } = props;

    return (
        <Route
            {...rest}
            render={routeProps => {
                if (isAuthorized) {
                    return (
                        <>
                            <Component {...routeProps} />
                        </>
                    );
                }
                return <Redirect to={Routes.EmptyRoute} />;
            }}
        />
    );
};
