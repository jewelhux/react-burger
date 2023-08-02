import React from 'react';
import { ISocketOrder } from '../../utils/interfaces';
import { orderListInfo } from '../../utils/utils';
import styles from './FeedInfo.module.css';

interface IProps {
  totalOrder: number;
  totalTodayOrder: number;
  orderList: ISocketOrder[];
}

const FeedInfo = ({ totalOrder, totalTodayOrder, orderList }: IProps) => {
  const orderStatusList = orderListInfo(orderList);

  const orderProcessList = orderStatusList.process;
  const orderFinishList = orderStatusList.done;

  return (
    <div className={styles.contentMain}>
      <div className={styles.actualOrder}>
        <div className={styles.orderFinish}>
          <h4 className={styles.orderNameSection}>Готовы:</h4>
          <div className={styles.orderFinishList}>
            {orderFinishList.map((item, index) => (
              <p className={styles.orderFinishItem} key={index}>
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className={styles.orderProcess}>
          <h4 className={styles.orderNameSection}>В работе:</h4>
          <div className={styles.orderProcessList}>
            {orderProcessList.map((item, index) => (
              <p className={styles.orderProcessItem} key={index}>
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.allTimeOrder}>
        <h4 className={styles.orderNameSection}>Выполнено за все время:</h4>
        <h3 className={styles.allTimeOrderCount}>{totalOrder}</h3>
      </div>
      <div className={styles.todaylOrder}>
        <h4 className={styles.orderNameSection}>Выполнено за сегодня:</h4>
        <h3 className={styles.todaylOrderCount}>{totalTodayOrder}</h3>
      </div>
    </div>
  );
};

export default FeedInfo;
