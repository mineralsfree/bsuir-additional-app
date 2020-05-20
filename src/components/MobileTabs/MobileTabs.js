import React from 'react'
import './MobileTabs.scss'
import {cn} from "@bem-react/classname";
const MobileTabsCn = cn('mobile-tabs')
export const MobileTabs = props=>{
  return (<div className={MobileTabsCn('container')}>
    {props.children}
  </div>)
}