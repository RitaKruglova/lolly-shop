import { FC } from 'react';
import logoStyles from './logo.module.css';

const Logo: FC = () => {
  return (
    <img className={logoStyles.logo} src="/images/logo.svg" alt="Логотип" />
  )
}

export default Logo;