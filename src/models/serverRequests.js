import axios from 'lib/http';

export const API_HOST = 'https://health-server-production.up.railway.app';

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
