import React from 'react';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404 - Страница не найдена</h1>
      <p className={styles.description}>Извините, запрошенная страница не существует.</p>
    </div>
  );
};

export default NotFoundPage;
