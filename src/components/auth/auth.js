import React from 'react'

import { Field, reduxForm } from 'redux-form'
import {useDispatch, useSelector} from "react-redux";
import {authActions} from "../../redux/auth/authSlice";
import formValueSelector from "redux-form/lib/formValueSelector";


export const Auth= () =>{
    const dispatch = useDispatch();
    const promoCodeForm = formValueSelector('authForm');
    const loginSelector = state => promoCodeForm(state, 'login');
    const passwordSelector = state => promoCodeForm(state, 'password');
    const password = useSelector(passwordSelector);
    const login = useSelector(loginSelector);

    const handleForm  = e =>{
        e.preventDefault();
        console.log(password)
        console.log(login)
    dispatch(authActions.auth({login, password}));

    };

    return(<div>
            <form onSubmit={ e =>handleForm(e)}>
                <Field
                    name="login"
                    component="input"
                    placeholder="Login"
                />
                <Field
                    name="password"
                    component="input"
                    placeholder="password"
                />
<button>login</button>
            </form>

        </div>
    )
}
export const AuthPage = reduxForm({
    form: 'authForm',
})(Auth);