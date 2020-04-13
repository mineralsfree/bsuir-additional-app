import {createSelector} from 'reselect';
export const getCurrentDirSelector = createSelector(
    [state =>state.files.dir],
    dir => dir
)
export const getFilesSelector = createSelector(
  [state => state.files.files],
  files => files
)
