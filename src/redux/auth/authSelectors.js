import { createSelector } from 'reselect';

export const getUserIdSelector = createSelector(
    [state => state.auth.userId],
    userId => userId,
);

export const isAuthorizedSelector = createSelector(
    [state => state.auth],
    authReducer => !!authReducer.token,
);
