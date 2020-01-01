import {createSlice} from 'redux-starter-kit';

const initialState = {page: 0, newsAtPage: 0, count: 0, news: []};


const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        getNews({page, count}) {
        },
        setNews(state, news) {
                state.page =  news.payload.page;
                state.newsAtPage =  20;
                state.count= news.payload.count;
                state.news = [...state.news,  ...news.payload.news]
        },
        clearNews() {//F2NikitaF
            return {
                ...initialState,
            };
        },
        auth({login, password}) {
        },
    },
});

export const newsActions = newsSlice.actions;

export default newsSlice.reducer;
