import {
  BurgerIcon,
  Logo,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import styles from './AppHeader.module.css';

const AppHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <div className={`${styles.menuItem}`}>
          <BurgerIcon type="primary"></BurgerIcon>
          <p className={styles.mainText}>Конструктор</p>
        </div>
        <div className={styles.menuItem}>
          <ListIcon type="secondary" />
          <p className={styles.mainTextDefault}>Лента заказов</p>
        </div>
      </div>
      <div className={styles.menuLogo}>
        <Logo />
      </div>
      <div className={`${styles.rightSection} ${styles.menuItem}`}>
        <ProfileIcon type="secondary" />
        <p className={styles.mainTextDefault}>Личный кабинет</p>
      </div>
    </header>
  );
};

export default AppHeader;
