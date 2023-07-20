import React from 'react';
import FeedInfo from '../../components/FeedInfo/FeedInfo';
import OrderList from '../../components/OrderList/OrderList';
import styles from './FeedPage.module.css';

const FeedPage = () => {
  return (
    <main className={styles.mainContainer}>
      <h2 className={styles.mainText}>Лента заказов</h2>
      <div className={styles.container}>
        <OrderList />
        <FeedInfo />
      </div>
    </main>
  );
};

export default FeedPage;
