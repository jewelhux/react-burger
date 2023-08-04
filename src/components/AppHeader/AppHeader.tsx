import {
  BurgerIcon,
  Logo,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../services/store';
import { HEADER_LINK, PROFILE_LINK } from '../../utils/const';
import styles from './AppHeader.module.css';

const AppHeader = () => {
  const userName = useAppSelector<string | undefined>((state) => state.user.user?.name);
  const location = useLocation();
  const [linkName, setLinkName] = useState('');

  useEffect(() => {
    setLinkName(location.pathname);
  }, [location]);

  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <div className={`${styles.menuItem}`}>
          <BurgerIcon
            type={`${linkName === HEADER_LINK.base ? 'primary' : 'secondary'}`}
          ></BurgerIcon>
          <NavLink
            to={HEADER_LINK.base}
            className={`${styles.mainTextDefault} ${
              linkName === HEADER_LINK.base ? styles.active : ''
            }`}
          >
            Конструктор
          </NavLink>
        </div>
        <div className={styles.menuItem}>
          <ListIcon type={`${linkName === HEADER_LINK.feed ? 'primary' : 'secondary'}`} />
          <NavLink
            to={HEADER_LINK.feed}
            className={`${styles.mainTextDefault} ${
              linkName === HEADER_LINK.feed ? styles.active : ''
            }`}
          >
            Лента заказов
          </NavLink>
        </div>
      </div>
      <div className={styles.menuLogo}>
        <Logo />
      </div>
      <div className={`${styles.rightSection} ${styles.menuItem}`}>
        <ProfileIcon
          type={`${
            linkName === HEADER_LINK.profile ||
            linkName === PROFILE_LINK.userData ||
            linkName === PROFILE_LINK.userOrder
              ? 'primary'
              : 'secondary'
          }`}
        />
        <NavLink
          to={HEADER_LINK.profile}
          className={`${styles.mainTextDefault} ${
            linkName === HEADER_LINK.profile ||
            linkName === PROFILE_LINK.userData ||
            linkName === PROFILE_LINK.userOrder
              ? styles.active
              : ''
          }`}
        >
          {userName ? userName : 'Личный кабинет'}
        </NavLink>
      </div>
    </header>
  );
};

export default AppHeader;
