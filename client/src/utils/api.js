import axios from 'axios';
import store from '../redux/store';
import { LOGOUT } from '../redux/actions/types';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 Intercept any error responses from the api
 and check if the token is no longer valid.
 i.e. Token has expired,
 logout the user if the token has expired.
**/

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.data.msg === 'Token is not valid') {
      store.dispatch({ type: LOGOUT });
    }
    return Promise.reject(err);
  }
);

export default api;
