import { createSlice } from 'redux-starter-kit';

const initialState = {};


const newsSlice = createSlice({
    name: 'freeAud',
    initialState,
    reducers: {
        getFreeAuds({page, count}){},
        setNews({news}){
            return {
                page: news.page,
                newsAtPage: news.newsAtPage,
                count: news.count,
                news: news.news
            }
        },
        clearNews() {
            return {
                ...initialState,
            };
        },
        auth({login, password}) {},
    },
});

export const newsActions = newsSlice.actions;

export default newsSlice.reducer;
