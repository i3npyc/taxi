import { axiosInstans } from '../axios/axios.instanse';

export const sendCard = cardData => axiosInstans().post('card', cardData);
export const getCard = () => axiosInstans().get('card');
