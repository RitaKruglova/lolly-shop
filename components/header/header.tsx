import { FC } from 'react';
import headerStyles from './header.module.css';

const Header: FC = () => {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.container}>
        <div className={headerStyles.contacts}>
          
        </div>
      </div>
    </header>
  )
}

export default Header;