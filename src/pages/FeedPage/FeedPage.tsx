import React from 'react';
import FeedInfo from '../../components/FeedInfo/FeedInfo';
import FeedList from '../../components/FeedList/FeedList';
import styles from './FeedPage.module.css';

const FeedPage = () => {
  return (
    <main className={styles.mainContainer}>
      <h2 className={styles.mainText}>Лента заказов</h2>
      <div className={styles.container}>
        <FeedList />
        <FeedInfo />
      </div>
    </main>
  );
};

export default FeedPage;
