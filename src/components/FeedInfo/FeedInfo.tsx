import React from 'react';
import styles from './FeedInfo.module.css';

const ORDER_FINISH = ['034533', '034534', '034535', '034536', '034533'];
const ORDER_PROCESS = ['044533', '044534', '044535', '044536'];

interface IProps {
  totalOrder: number;
  totalTodayOrder: number;
}

const FeedInfo = ({ totalOrder, totalTodayOrder }: IProps) => {
  return (
    <div className={styles.contentMain}>
      <div className={styles.actualOrder}>
        <div className={styles.orderFinish}>
          <h4 className={styles.orderNameSection}>Готовы:</h4>
          <div className={styles.orderFinishList}>
            {ORDER_FINISH.slice(0, 9).map((item, index) => (
              <p className={styles.orderFinishItem} key={index}>
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className={styles.orderProcess}>
          <h4 className={styles.orderNameSection}>В работе:</h4>
          <div className={styles.orderProcessList}>
            {ORDER_PROCESS.slice(0, 9).map((item, index) => (
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
