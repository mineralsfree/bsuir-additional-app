import React from "react";
import {cn} from "@bem-react/classname";
import './TextInput.scss'

const textInputCN = cn('text-input')
export const Input = (field) => (<>
  <input  {...field.input} type="text" className={textInputCN()} autoComplete={'off'}/>
  {field.meta.touched && field.meta.error &&
  <span className="error">{field.meta.error}</span>}
</>)
