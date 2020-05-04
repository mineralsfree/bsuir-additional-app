import {toast } from 'react-toastify';
export const error = string => toast.error('🤦‍♂️' + string);
export const notify = string => toast.info('🤖 ' + string,);
