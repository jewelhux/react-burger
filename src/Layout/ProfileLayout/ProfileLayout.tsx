import { Outlet } from 'react-router';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProfileLayout.module.css';
import { useAppDispatch } from '../../services/store';
import { logoutUser } from '../../services/actions/actions';

function ProfileLayout() {
  const dispatch = useAppDispatch();
  const handleLogout = (event: React.MouseEvent) => {
    event.preventDefault();
    dispatch(logoutUser());
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.sectionContainer}>
        <div className={styles.linkContainer}>
          <Link className={`${styles.link} ${styles.active}`} to="/profile">
            Профиль
          </Link>
          <Link className={styles.link} to="/profile/orders">
            История заказов
          </Link>
          <Link className={styles.link} to="/" onClick={handleLogout}>
            Выход
          </Link>
        </div>
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
