import { API_HOST } from 'config';
import axios from 'lib/http';

export const serverPost = ({ url = '', data = {}, onFinish = () => {} }) => {
  axios
    .post(`${API_HOST}/${url}`, data)
    .then(({ data: res }) => {
      onFinish(res);
    })
    .catch((err) => {
      onFinish(false, err?.response?.data ?? err);
    });
};
