import axios from 'axios';
const { VITE_URL } = import.meta.env;
export const instance = axios.create({
  baseURL: VITE_URL,
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const setToken = accessToken => {
  instance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};
export const clearToken = () => {
  instance.defaults.headers.common.Authorization = '';
};
