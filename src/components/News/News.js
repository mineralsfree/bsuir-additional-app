import  React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import {newsActions} from '../../redux/news/newsSlice.js'
import {getNewsSelector} from "../../redux/news/newsSelectors";
import {cn} from "@bem-react/classname";
import './News.scss';
import {NewsPost} from "./NewsPost/NewsPost";

import InfiniteScroll from 'react-infinite-scroll-component';
const atPage = 20;
const NewsCN = cn('news');
export const News = () =>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(newsActions.getNews({page: 1, newsAtPage: atPage}));
        return ()=>dispatch(newsActions.clearNews());
    }, [dispatch]);
    const news = useSelector(getNewsSelector);
    const fetchNews = ()=>{
        dispatch(newsActions.getNews({page: news.length/20+1, newsAtPage: atPage}));
    };

return(<div className={NewsCN('container')} id="scrollableDiv">
    <InfiniteScroll
        dataLength={news.length || 0} //This is important field to render the next data
        next={fetchNews}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
            <p style={{textAlign: 'center'}}>
                <b>Yay! You have seen it all</b>
            </p>
        }>
        {news && news.map((el)=>{
            return (<NewsPost key={el.id}  {...el}/>)
        })}
    </InfiniteScroll>
</div>)

}
