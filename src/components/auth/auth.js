import React from 'react'
import './auth.scss'
import {Field, reduxForm} from 'redux-form'
import {useDispatch, useSelector} from "react-redux";
import {authActions} from "../../redux/auth/authSlice";
import formValueSelector from "redux-form/lib/formValueSelector";
import {cn} from '@bem-react/classname'
import logo from '../../static-photos/2x/logo.png'

const authPageCn = cn('auth-page');
export const Auth = () => {
  const dispatch = useDispatch();
  const authForm = formValueSelector('authForm');
  const loginSelector = state => authForm(state, 'login');
  const passwordSelector = state => authForm(state, 'password');
  const password = useSelector(passwordSelector);
  const login = useSelector(loginSelector);

  const handleForm = e => {
    e.preventDefault();

    dispatch(authActions.auth({login, password}));
  };
  return (<div className={authPageCn('container')}>
      <div className={authPageCn('content')}>
        <img className={authPageCn('logo')} src={logo} alt={'слепые сосать'}/>
        <form onSubmit={e => handleForm(e)} className={authPageCn('input-form')}>
          <div className={authPageCn('login')}>
            {/*<LoginIcon className={authPageCn('login-icon')}/>*/}
            {/*<div className={authPageCn('login-icon')}>a</div>*/}
            <Field
              className={authPageCn('login-input') + ' ' + authPageCn('input')}
              name="login"
              component="input"
              placeholder="Логин"
            />
          </div>


          <Field
            className={authPageCn('password-input') + ' ' + authPageCn('input')}
            name="password"
            component="input"
            type='password'
            placeholder="Пароль"
          />
          <button className={authPageCn('login-button')}>ВОЙТИ</button>
        </form>
      </div>
    </div>
  )
}
export const AuthPage = reduxForm({
  form: 'authForm',
})(Auth);
