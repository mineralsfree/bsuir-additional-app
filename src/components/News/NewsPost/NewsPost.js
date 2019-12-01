import  React from "react"
import './NewsPost.scss'
import ReactMarkdown from 'react-markdown';
import {cn} from "@bem-react/classname";
import FittedImage from "react-fitted-image";
const PostCn = cn('news-post');

export const NewsPost = ({id,shortContent, title, content, published, loaded, source, url, urlToImage }) =>{
    return (<div key={id} className={PostCn('container')}>

        <a href={url} className={PostCn('title')}>
            {title.match(/BRSM/i) ? '💩': '' }{title.length >0 ? title : url}{title.match(/BRSM/i) ? '💩': '' }
        </a>
    { urlToImage && <FittedImage
            fit="contain"
            className={PostCn('image')}
             src={urlToImage}
             alt={'слепые сосать'}/>}
        <div >
            <ReactMarkdown className={PostCn('content')}
                           source={shortContent}
                           linkTarget='_blank'
                           disallowedTypes={['image']} />
        </div>
    </div>)
}
