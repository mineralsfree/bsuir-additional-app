import {createSelector} from 'reselect';

export const getFilesSelector = createSelector(
  [state => state.files.files],
  files => files
)