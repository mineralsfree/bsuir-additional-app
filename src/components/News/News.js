import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import {newsActions} from '../../redux/news/newsSlice.js'
import {getMySourcesSelector, getNewsSelector, getSourcesSelector} from "../../redux/news/newsSelectors";
import {cn} from "@bem-react/classname";
import './News.scss';
import {NewsPost} from "./NewsPost/NewsPost";

import InfiniteScroll from 'react-infinite-scroll-component';
import {DropDownWithCheckbox} from "../common/DropDownWithCheckbox/DropDownWithCheckbox";

const atPage = 20;
const NewsCN = cn('news');
export const News = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(newsActions.getSources())
    dispatch(newsActions.getMySources())
  }, [dispatch]);


  const sources = useSelector(getSourcesSelector)
  const sourcesDrop = sources.map((el) => {
    return {
      value: el.alias,
      label: el.name.split('ВК')[0]
    }
  })
  const subs = useSelector(getMySourcesSelector);
  const mySubscriptions = subs && sourcesDrop.filter((el) => {
    return subs.indexOf(el.value)!== -1
  })
  const news = useSelector(getNewsSelector);

  const fetchNews = () => {
    dispatch(newsActions.getNews({page: news.length / 20 + 1, newsAtPage: atPage}));
  };
  const onChangeSubscriptions = e => {
    dispatch(newsActions.clearNews())
    if (e !==null){
      dispatch(newsActions.putSources(e.map(el=>el.value)))
    } else{
      dispatch(newsActions.putSources())

    }
  }
  useEffect(()=>{
    dispatch(newsActions.getNews({page: 0, newsAtPage: atPage, mySources: subs}))
  }, [dispatch, subs])
  return (<>   <div className={NewsCN('drop-down')}>
    {sourcesDrop  && mySubscriptions && false   && <DropDownWithCheckbox defaultValue={mySubscriptions.length>0 && mySubscriptions} options={sourcesDrop} onChange={onChangeSubscriptions}>
    </DropDownWithCheckbox> }
  </div>
    <div className={NewsCN('container')} id="scrollableDiv">

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
        {news && news.map((el) => {
          return (<NewsPost key={el.id}  {...el}/>)
        })}
      </InfiniteScroll>
    </div>
  </>)

}
