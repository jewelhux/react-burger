import { Outlet } from 'react-router';
import React from 'react';
import styles from './MainLayout.module.css';
import AppHeader from '../components/AppHeader/AppHeader';

function MainLayout() {
  return (
    <div className={styles.app}>
      <AppHeader />
      <Outlet />
    </div>
  );
}

export default MainLayout;
