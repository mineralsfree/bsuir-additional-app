import {createSlice} from 'redux-starter-kit';

const initialState = {
  user: {}, marks: {
    semesters: [],
    user: {},
    marks: {}
  }
};


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getMarks() {
    },
    setMarks(state, action) {
      return {
        ...state,
        marks: action.payload,
      }
    },
    getUser() {
    },
    setUser(state, action) {
      return {
        ...state,
        user: action.payload

      }
    },
    clearUser() {
      return {
        ...initialState,
      };
    },
    auth({login, password}) {
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
