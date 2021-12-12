import axios from 'axios';

export const axiosInstans = content => {
  const token = localStorage.getItem('access_token');
  return axios.create({
    baseURL: 'https://loft-taxi.glitch.me/',
    headers: {
      'Content-Type': content ?? 'application/json',
      Authorization: `Bearer ${token}`
    }
  });
};
