import { createSlice } from 'redux-starter-kit';

const initialState = {page: 0, newsAtPage: 0, count: 0, news: []};


const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
       getNews({page, count}){},
        setNews(state, news){
           console.log(state, news)
            return {
                page: news.payload.page,
                newsAtPage: news.payload.newsAtPage,
                count: news.payload.count,
                news: news.payload.news
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
