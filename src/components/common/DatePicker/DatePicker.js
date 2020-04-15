import React from 'react'
import {cn} from "@bem-react/classname";
import {CommonButton} from "../Button/Button";
import DatePicker from "react-datepicker/es";
import './DatePicker.scss'

const datePickerCn = cn('date-picker');
export const MyDatePicker = props => {
  return (<div className={datePickerCn('container')}>
    <CommonButton onClick={(e) => {
      e.preventDefault();
      props.setDate(new Date())
    }} className={datePickerCn('button')}>Today</CommonButton>
    <CommonButton onClick={(e) => {
      e.preventDefault();
      let tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      props.setDate(tomorrow);
    }} className={datePickerCn('button')}>Tomorrow</CommonButton>

    <DatePicker
      selected={props.date}
      onChange={props.setDate}
      className={datePickerCn("input")}
    />
  </div>)
}