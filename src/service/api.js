import { axiosInstans } from '../axios/axios.instanse';

export const ServiceApi = {
  auth: form => axiosInstans().post(`auth`, form),
  createAccount: account => axiosInstans().post(`register`, account),
  card: cardData => axiosInstans().post(`card`, cardData),
  getCard: () => axiosInstans().get(`card`),
  getAddresses: () => axiosInstans().get(`addressList`),
  getRoute: (oneAddress, twoAddress) =>
    axiosInstans().get(`route?address1=${oneAddress}&address2=${twoAddress}`)
};
