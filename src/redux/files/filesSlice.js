import {createSlice} from 'redux-starter-kit';

const initialState = {
    dir: 'root',
    files: []
}
const filesSlice = createSlice({
        name: 'files',
        initialState,
        reducers: {
            setDir(state, action) {
                return {
                    ...state,
                    files: action.payload
                }
            },
            getDir(state, action) {
            },
            cd(state, action){
              return {
                ...state,
                dir: action.payload
              }
            }
        }
    }
)
export const filesActions = filesSlice.actions;
export default filesSlice.reducer;
