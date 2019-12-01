import { createSelector } from 'reselect';


export const getNewsSelector = createSelector(
    [state => state.news.news],
    news=>news
)
