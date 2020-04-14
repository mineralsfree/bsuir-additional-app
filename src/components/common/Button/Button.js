import React from "react";
import {cn} from "@bem-react/classname";
import './Button.scss'
export const CommonButton = props =>{
    return (<button className={cn('common-button')()}>
        {props.children}
    </button>)
}
