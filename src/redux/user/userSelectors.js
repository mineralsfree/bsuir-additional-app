import {createSelector} from "reselect";

export const getUserSelector = createSelector(
    [state => state.user.user],
    user=>user
)
export const getUserMarksSelector = createSelector(
  [state=>state.user.marks],
  marks => marks)
