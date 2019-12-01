import  React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import {newsActions} from '../../redux/news/newsSlice.js'
import {getNewsSelector} from "../../redux/news/newsSelectors";
import {cn} from "@bem-react/classname";
import './News.scss'
import {NewsPost} from "./NewsPost/NewsPost";
const NewsCN = cn('news');
export const News = () =>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(newsActions.getNews({page: 1, newsAtPage: 20}))
    }, [dispatch])
    const news = useSelector(getNewsSelector).map((el)=>{
        return (<NewsPost  {...el}/>)
    });

return(<div className={NewsCN('container')}>
    {news}
</div>)

}
