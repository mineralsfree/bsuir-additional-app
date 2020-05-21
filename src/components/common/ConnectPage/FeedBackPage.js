import React from "react";
import {Field, reduxForm} from "redux-form";
import {CommonButton} from "../Button/Button";
import './FeedBackPage.scss'
import {cn} from "@bem-react/classname";
import formValueSelector from "redux-form/lib/formValueSelector";
import {feedbackApi} from "../../../api/feedBackApi";
import {Routes} from "../../../const/Routes";
import {notify} from "../../../helpers/toaster-helper";
import {useSelector} from "react-redux";

const feedbackCn = cn('feedback')
export const FeedBack = (props) => {
  const feedBackForm = formValueSelector('feedBackForm');
  const messageSelector = state => feedBackForm(state, 'message');
  const message = useSelector(messageSelector);
  const emailSelector = state => feedBackForm(state, 'email');
  const email = useSelector(emailSelector);
  const handleForm = e => {
    e.preventDefault();
    feedbackApi.feedback({message: message, contacts: email, type: "ERROR"})
      .then(() => {
        notify("Спасибо за отзыв")
        props.history.push(Routes.MainRoute)
      });
  }
  const {sessionID} = props;
  return (<div className={feedbackCn('container')}>
    <h2>Расскажите о проблеме или предложите улучшение</h2>
    <form className={feedbackCn('form')} onSubmit={e => handleForm(e)}>

      <div className={feedbackCn('input-item')}>
        Ваша почта:
        <Field name="email" component="input">
        </Field>

      </div>
      <div className={feedbackCn('input-item')}>
        Описание:
        <Field name="message" component="textarea">
        </Field>
      </div>

      {sessionID ? ('Session ID:' + sessionID) : ''}
      <CommonButton type='submit'> Отправить </CommonButton>
    </form>
  </div>)
}

export const FeedBackPage = reduxForm({
  form: 'feedBackForm'
})(FeedBack)