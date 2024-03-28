import { FC } from 'react';
import headerStyles from './header.module.css';
import Contact from '../contact/contact';
import Logo from '../logo/logo';

const Header: FC = () => {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.container}>
        <div className={headerStyles.contacts}>
          <Contact iconPath="/images/geotag-icon.svg" text="Москва, Новоостаповская, 6" link="https://yandex.ru/maps/-/CDRNQX0v"/>
          <Contact iconPath="/images/phone-icon.svg" text="+7(985) 437-83-08" link="tel:+79854378308"/>
        </div>
        <Logo />
        <div className={headerStyles.toolbal}>
          
        </div>
      </div>
    </header>
  )
}

export default Header;