import { APP_NAME } from 'config';
import React from 'react';
import defaultImage from 'assets/images/default-thumbnail.jpg';

export const DEFAULT_IMAGE = defaultImage;

export default function Img({ src = defaultImage, alt = '', ...props }) {
  return <img src={src} alt={alt || APP_NAME} {...props} />;
}
