import {
  BurgerIcon,
  Logo,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../services/store';
import styles from './AppHeader.module.css';

const AppHeader = () => {
  const userName = useAppSelector<string | undefined>((state) => state.user.user?.name);

  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <div className={`${styles.menuItem}`}>
          <BurgerIcon type="primary"></BurgerIcon>
          <Link to="/" className={styles.mainText}>
            Конструктор
          </Link>
        </div>
        <div className={styles.menuItem}>
          <ListIcon type="secondary" />
          <Link to="/feed" className={styles.mainTextDefault}>
            Лента заказов
          </Link>
        </div>
      </div>
      <div className={styles.menuLogo}>
        <Logo />
      </div>
      <div className={`${styles.rightSection} ${styles.menuItem}`}>
        <ProfileIcon type="secondary" />
        <Link to="/profile" className={styles.mainTextDefault}>
          {userName ? userName : 'Личный кабинет'}
        </Link>
      </div>
    </header>
  );
};

export default AppHeader;
