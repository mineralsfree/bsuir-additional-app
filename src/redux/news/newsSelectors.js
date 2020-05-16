import { createSelector } from 'reselect';


export const getNewsSelector = createSelector(
    [state => state.news.news],
    news=>news
)

export const getSourcesSelector = createSelector(
  [state => state.news.sources],
  sources => sources
)
export const getMySourcesSelector = createSelector(
  [state=> state.news.mySources],
  mySources => mySources
)