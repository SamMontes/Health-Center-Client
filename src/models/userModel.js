import { serverPost } from './serverRequests';

export const login = ({ data = {}, onFinish = () => {} }) => {
  serverPost({ url: 'users/authenticate', data: data, onFinish: onFinish });
};

export const register = ({ data = {}, onFinish = () => {} }) => {
  serverPost({ url: 'users/register', data: data, onFinish: onFinish });
};
