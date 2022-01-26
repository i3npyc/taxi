import { axiosInstans } from '../axios/axios.instanse';

export const sendCard = cardData => axiosInstans().post('card', cardData);
export const getCardData = authToken =>
  axiosInstans().get(`card?token=${authToken}`);
