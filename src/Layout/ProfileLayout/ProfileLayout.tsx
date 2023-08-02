import { Outlet } from 'react-router';
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './ProfileLayout.module.css';
import { useAppDispatch } from '../../services/store';
import { logoutUser } from '../../services/actions';
import { PROFILE_LINK } from '../../utils/const';

function ProfileLayout() {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const [linkName, setLinkName] = useState('');
  const handleLogout = (event: React.MouseEvent) => {
    event.preventDefault();
    dispatch(logoutUser());
  };

  useEffect(() => {
    setLinkName(location.pathname);
  }, [location]);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.sectionContainer}>
        <nav className={styles.linkContainer}>
          <NavLink
            className={`${styles.link} ${linkName === PROFILE_LINK.userData ? styles.active : ''}`}
            to={PROFILE_LINK.userData}
          >
            Профиль
          </NavLink>
          <NavLink
            className={`${styles.link} ${linkName === PROFILE_LINK.userOrder ? styles.active : ''}`}
            to={PROFILE_LINK.userOrder}
          >
            История заказов
          </NavLink>
          <NavLink className={styles.link} to="/" onClick={handleLogout}>
            Выход
          </NavLink>
        </nav>
        <p className={styles.textLinkContainer}>
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <div className={styles.dinamicMenu}>
        <Outlet />
      </div>
    </div>
  );
}

export default ProfileLayout;
