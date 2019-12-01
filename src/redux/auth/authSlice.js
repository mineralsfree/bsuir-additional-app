import { createSlice } from 'redux-starter-kit';

const initialState = { userId: null, token: null };


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthData(state, action) {
            const { token, userId } = action.payload;
            return {
                ...state,
                token,
                userId,
            };
        },
        logout() {
            return {
                ...initialState,
            };
        },
        auth({login, password}) {},
    },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
