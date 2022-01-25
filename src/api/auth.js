import { axiosInstans } from '../axios/axios.instanse';

export const auth = form => axiosInstans().post('/auth', form);
export const createAccount = form => axiosInstans().post('/register', form);
