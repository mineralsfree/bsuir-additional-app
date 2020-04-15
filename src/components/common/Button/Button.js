import React from "react";
import {cn} from "@bem-react/classname";
import './Button.scss'
export const CommonButton = props =>{
    return (<button  {...props} className={cn('common-button')() +' '+  props.className}>
        {props.children}
    </button>)
}
