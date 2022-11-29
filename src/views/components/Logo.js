import logoWhite from 'assets/images/logo/logo-white.png';
import logo from 'assets/images/logo/logo.png';
import { APP_NAME } from 'config';
import Img from './Img';

export default function Logo({ variant = 'default' }) {
  return (
    <div>
      <Img src={variant === 'default' ? logo : logoWhite} alt={APP_NAME} />
    </div>
  );
}
