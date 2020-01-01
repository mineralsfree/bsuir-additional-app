import {createSelector} from "reselect";

export const getUserSelector = createSelector(
    [state => state.user.user],
    user=>user
)
