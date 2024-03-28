import { FC } from 'react';
import headerStyles from './header.module.css';
import Contact from '../contact/contact';
import Logo from '../logo/logo';
import HeaderForm from '../header-form/header-form';
import Link from 'next/link';

const Header: FC = () => {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.container}>
        <div className={headerStyles.contacts}>
          <Contact iconPath="/images/geotag-icon.svg" text="Москва, Новоостаповская, 6" link="https://yandex.ru/maps/-/CDRNQX0v"/>
          <Contact iconPath="/images/phone-icon.svg" text="+7(985) 437-83-08" link="tel:+79854378308"/>
        </div>
        <Logo />
        <div className={headerStyles.toolbar}>
          <HeaderForm />
          <div className={headerStyles.links}>
            <Link href="/liked">
              <img className={headerStyles.icon} src="/images/liked-icon.svg" alt="Иконка сердечка"/>
            </Link>
            <Link href="/cart">
              <img className={headerStyles.icon} src="/images/cart-icon.svg" alt="Иконка корзины"/>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;