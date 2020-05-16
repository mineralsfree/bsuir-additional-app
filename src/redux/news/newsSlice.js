import {createSlice} from 'redux-starter-kit';

const initialState = {page: 0, newsAtPage: 0, count: 0, news: [], sources: [], mySources: null};


const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    getMySources(){},
    putMySources(state, action){
      return{
        ...state,
        mySources: action.payload
      }
    },
    getNews({page, count}) {
    },
    getSources() {
    },
    putSources(state, action){
    },
    setSources(state, action) {
      return {
        ...state,
        sources: action.payload
      }
    },
    setNews(state, news) {
      return {
        ...state,
        page: news.payload.page,
        newsAtPage: 20,
        count: news.payload.count,
        news: [...state.news, ...news.payload.content]
      }

    },
    clearNews(state) {//F2NikitaF
      return {
        ...state,
        news:[],
        page: 0, newsAtPage: 0, count: 0
      };
    },
    auth({login, password}) {
    },
  },
});

export const newsActions = newsSlice.actions;

export default newsSlice.reducer;
