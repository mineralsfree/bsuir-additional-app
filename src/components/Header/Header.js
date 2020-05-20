import React from 'react';
import {cn} from '@bem-react/classname'
import './Header.scss'
import {Link} from "react-router-dom";
import hamburger from '../../static-photos/SVG/burder.svg'
import {MobileTabs} from "../MobileTabs/MobileTabs";

const headerCN = cn('header');
export const Header = props => {
  const {pathname} = props.location;
  const isDesktop = window.matchMedia("(min-width: 1023px)").matches;
  const Links = ({d}) => {
    return (<>       <Link className={headerCN('link', {active: pathname === '/news', news: !d})}
                           to={'/news'}>{d && 'Новости'}</Link>
      <Link className={headerCN('link', {active: pathname === '/rating', rating: !d})}
            to={'/rating'}>{d && 'Рейтинг'}</Link>
      <Link className={headerCN('link', {active: pathname === '/files', 'files': !d})}
            to={'/files'}>{d && 'Файлы'}</Link>
      <Link className={headerCN('link', {active: pathname === '/free-rooms', 'free-rooms': !d})}
            to={'/free-rooms'}>{d && 'Свободные аудитории'}</Link>
      <Link className={headerCN('link', {active: pathname === '/user', 'my-profile': !d},)}
            to={'/user'}>{d && 'Мой профиль'}</Link></>)
  }
  return (<div className={headerCN('container')}>
    <Link to={'/home'} className={headerCN('logo')}>Студент БГУИР</Link>
    <div className={headerCN('menu-container')}>
      {isDesktop ?
        <nav className={headerCN('nav')}>
          <Links d={isDesktop}/>
        </nav> : <MobileTabs><Links d={isDesktop}/></MobileTabs>
      }


    </div>
  </div>)
};

