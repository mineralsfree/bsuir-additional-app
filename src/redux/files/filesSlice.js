import {createSlice} from 'redux-starter-kit';

const initialState = {
  files: []
}
const filesSlice = createSlice({
    name: 'files',
    initialState,
    reducers: {
      setRoot(state, action) {
        return {
          ...state,
          files: action.payload
        }
      },
      getRoot(state, action) {

      }
    }
  }
)
export const filesActions = filesSlice.actions;
export default filesSlice.reducer;