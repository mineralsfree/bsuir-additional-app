import React from 'react'
import './ProfileIcon.scss'
import {cn} from "@bem-react/classname";
import {Link} from "react-router-dom";
const ProfileCN = cn('user-icon')
export const ProfileIcon = () =>{
    return <div className={ProfileCN('container')}><Link to={'/user'}>Мой Профиль</Link></div>
}
