import { axiosInstans } from '../axios/axios.instanse';

export const getAddresses = () => axiosInstans.get('addressList');
export const getCoordinates = (oneAddress, twoAddress) =>
  axiosInstans.get(`route?address1=${oneAddress}&address2=${twoAddress}`);
