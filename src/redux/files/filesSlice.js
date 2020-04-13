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
                console.log(action);
            }
        }
    }
)
export const filesActions = filesSlice.actions;
export default filesSlice.reducer;
