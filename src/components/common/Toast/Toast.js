import React  from "react";
import {toast} from "react-toastify";
import './Toast.scss'
import {Link} from "react-router-dom";
import {Routes} from "../../../const/Routes";
export const Toast = props =>{
  console.log(props);
  return(<div className={'toaster-container'}>
    Произошла ошибка "{props.e}",  отправить подробности? <br/>
  <Link to={`${Routes.FeedbackPage}`}>Связаться с разрабами</Link>
  </div>)

}
export const errorToast = (error)=>toast(<Toast e={error}/>)