import { createSlice } from 'redux-starter-kit';

const initialState = {
    freeAuds: []
};


const freeAuds = createSlice({
    name: 'freeAud',
    initialState,
    reducers: {

        getFreeAuds(building, floor,time, date  ){},
        setFreeAuds(state, {payload}) {
            console.log(freeAuds);
            return {
                ...state,
                freeAuds: payload
            }
        },
        clearFreeAuds() {
            return initialState
        },
    },
});

export const freeAudActions = freeAuds.actions;

export default freeAuds.reducer;
