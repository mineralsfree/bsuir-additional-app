import React from "react";
import {cn} from "@bem-react/classname";
import './TextInput.scss'

const textInputCN = cn('text-input')
export const Input = (field) => {
  let className = textInputCN();
  if (field.className) {
    className += " " + field.className
  }
  let type = field.type ? field.type:  "text";
  return (<>
    <input  {...field.input} type={type} pattern={field.pattern}  className={className} placeholder={field.label} autoComplete={'off'} required={field.required}/>
    {field.meta.touched && field.meta.error &&
    <span className="error">{field.meta.error}</span>}
  </>)

}
