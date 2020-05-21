import axios from 'axios';

import { API_URL } from './baseApi'
import {errorToast} from "../components/common/Toast/Toast";
export const authApi = {
    auth: async (username, password ) =>{
        const response = await axios.post(`${API_URL}/auth`, { username, password});
        if (response.status === 200){
            const token =  response.data.token;

            axios.defaults.headers.common.Authorization = `Bearer ${token}`;
            localStorage.setItem('authToken', token);
        }
    }
}
export const initAuthorization = () => {
    const token = localStorage.getItem('authToken');

    if (token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
};
axios.interceptors.response.use( (response)=> {
    // Do something with response data
    return response;
}, function (e) {
    errorToast(e);
    return Promise.reject(e);
});
initAuthorization();
