import jwt_decode from 'jwt-decode';
import axios from 'lib/http';
import { toNumber } from 'lib/math';
import { isObject } from 'lodash';
import moment from 'moment';

export const updateStore = (state = {}, payload) => {
  return !payload
    ? state
    : typeof payload === 'function'
    ? payload(state)
    : isObject(payload)
    ? {
        ...state,
        ...payload,
      }
    : state;
};

export const formatAuthStore = (data = {}) => {
  const token = data?.token ?? '';
  var decodedToken = jwt_decode(token, { complete: true });

  const isAuth = moment(toNumber(decodedToken?.exp) * 1000).isAfter(moment());

  if (isAuth) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    localStorage.setItem('access_token', token);
  }

  return {
    ...data,
    isAuth: isAuth,
  };
};
