import { FC } from 'react';
import headerFormStyles from './header-form.module.css';

const HeaderForm: FC = () => {
  return (
    <form className={headerFormStyles.form}>
      <button
        className={headerFormStyles.button}
        type="submit"
        aria-label="Поиск товаров"
      />
      <input
        className={headerFormStyles.input}
        type="text"
        placeholder="Поиск"
        required
      />
    </form>
  )
}

export default HeaderForm;