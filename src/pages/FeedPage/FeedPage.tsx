import React from 'react';
import FeedInfo from '../../components/FeedInfo/FeedInfo';
import OrderList from '../../components/OrderList/OrderList';
import { useAppSelector } from '../../services/store';
import styles from './FeedPage.module.css';

const FeedPage = () => {
  const allFeedOrders = useAppSelector((state) => state.feedOrders.orderList);

  return (
    <main className={styles.mainContainer}>
      <h2 className={styles.mainText}>Лента заказов</h2>
      <div className={styles.container}>
        <OrderList orderList={allFeedOrders} />
        <FeedInfo />
      </div>
    </main>
  );
};

export default FeedPage;
