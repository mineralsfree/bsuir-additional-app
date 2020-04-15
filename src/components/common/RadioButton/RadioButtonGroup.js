import React from "react";
import {cn} from "@bem-react/classname";
import './RadioButtonGroup.scss'
const radioButtonGroupCN = cn('radio-button-group')
export const RadioButtonGroup = props => {
  return props.items.map((el) => {
    return (<>
      <input type="radio" key={el.value} onChange={(e)=>{
        props.check(el.value);
      }} checked={props.checked === el.value} name={props.name} className={radioButtonGroupCN('item')} value={el.value} id={el.value}/>
      <label key={'label '+ el.value} className={radioButtonGroupCN('label')} htmlFor={el.value}>{el.label}</label></>)

  })

}