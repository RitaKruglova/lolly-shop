import { FC } from 'react';
import contactStyles from './contact.module.css';

interface IContactProps {
  iconPath: string;
  text: string;
  link: string;
}

const Contact: FC<IContactProps> = ({ iconPath, text, link }) => {
  return (
    <address className={contactStyles.container}>
      <img className={contactStyles.icon} src={iconPath} alt="Иконка" />
      <a className={contactStyles.link} href={link} target="_blank">{text}</a>
    </address>
  )
}

export default Contact;