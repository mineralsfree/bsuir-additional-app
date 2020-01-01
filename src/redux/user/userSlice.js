import { createSlice } from 'redux-starter-kit';

const initialState = {user: {}};


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUser(){},
        setUser(state, user){
            return {
                ...state,
                user: user.payload

            }
        },
        clearUser() {
            return {
                ...initialState,
            };
        },
        auth({login, password}) {},
    },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
