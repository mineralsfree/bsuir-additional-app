import React from "react"
import './NewsPost.scss'
import ReactMarkdown from 'react-markdown';
import {cn} from "@bem-react/classname";
import FittedImage from "react-fitted-image";

const PostCn = cn('news-post');

export const NewsPost = ({id, shortContent, title,  published, loaded, source, url, urlToImage}) => {
    return (<div key={id} className={PostCn('container')}>
        <div className={PostCn('source')}>{source.name}</div>
        {<a target="_blank" rel="noopener noreferrer"  href={url} className={PostCn('title')}>
            {title && title.length > 0 && source.alias.match(/BDSM_BSUR_VK/i) ? '💩' : ''}{title && title.length > 0 ? title : url}{title && title.length > 0 && source.alias.match(/BDSM_BSUR_VK/i) ? '💩' : ''}
        </a>}
        {urlToImage && <FittedImage
            fit="contain"
            className={PostCn('image')}
            src={urlToImage}
            alt={'слепые сосать'}/>}
        <div>
            <ReactMarkdown className={PostCn('content')}
                           source={shortContent}
                           linkTarget='_blank'
                           rel="noopener noreferrer"
                           disallowedTypes={['image']}/>
        </div>
    </div>)
}
