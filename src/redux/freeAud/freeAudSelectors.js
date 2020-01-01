import { createSelector } from 'reselect';


export const getAudsSelector = createSelector(
    [state => state.freeAuds.freeAuds],
    freeAuds=>freeAuds
);
