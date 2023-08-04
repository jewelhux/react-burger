import React from 'react';
import { useEffect } from 'react';
import FeedInfo from '../../components/FeedInfo/FeedInfo';
import OrderList from '../../components/OrderList/OrderList';
import { wsConnectFeed, wsCloseFeed } from '../../services/actions/socketFeedActions';
import { useAppDispatch, useAppSelector } from '../../services/store';
import { WS_ORDERS_URL } from '../../utils/const';
import styles from './FeedPage.module.css';

const FeedPage = () => {
  const allFeedOrders = useAppSelector((state) => state.feedOrders.orderList);
  const totalOrder = useAppSelector((state) => state.feedOrders.total);
  const totalTodayOrder = useAppSelector((state) => state.feedOrders.totalToday);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(wsConnectFeed(WS_ORDERS_URL));
    return () => {
      dispatch(wsCloseFeed());
    };
  }, [dispatch]);

  return (
    <main className={styles.mainContainer}>
      <h2 className={styles.mainText}>Лента заказов</h2>
      <div className={styles.container}>
        <OrderList orderList={allFeedOrders} />
        <FeedInfo
          totalOrder={totalOrder}
          totalTodayOrder={totalTodayOrder}
          orderList={allFeedOrders}
        />
      </div>
    </main>
  );
};

export default FeedPage;
