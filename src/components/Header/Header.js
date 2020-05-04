import React from 'react';
import {cn} from '@bem-react/classname'
import './Header.scss'
import {Link} from "react-router-dom";
import hamburger from '../../static-photos/SVG/burder.svg'

const headerCN = cn('header');
export const Header = props => {
  const {pathname} = props.location;


  return (<div className={headerCN('container')}>
    <Link to={'/home'} className={headerCN('logo')}>Студент БГУИР</Link>

    <input type={'checkbox'} id={'hamburger'} className={headerCN('hamburger')}/>
    <label className={headerCN('label-hamburger')} htmlFor={'hamburger'}>
      <img src={hamburger} alt={'hamburger'}/>
    </label>
    <div className={headerCN('menu-container')}>
      <nav className={headerCN('nav')}>

        <Link className={headerCN('link', {active: pathname === '/news'})} to={'/news'}>Новости</Link>
        <Link className={headerCN('link', {active: pathname === '/rating'})} to={'/rating'}>Рейтинг</Link>
        <Link className={headerCN('link', {active: pathname === '/files'})} to={'/files'}>Файлы</Link>
        <Link className={headerCN('link', {active: pathname === '/free-rooms'})} to={'/free-rooms'}>Свободные
          аудитории</Link>
        <Link className={headerCN('link', {active: pathname === '/user'})} to={'/user'}>Мой Профиль</Link>
      </nav>

    </div>
  </div>)
};

