// import { serverPost } from './serverRequests';

export const sendContactUs = ({ data = {}, onFinish = () => {} }) => {
  onFinish(true);
  // serverPost({ url: 'users/authenticate', data: data, onFinish: onFinish });
};
