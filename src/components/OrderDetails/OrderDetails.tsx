import React from 'react';
import styles from './OrderDetails.module.css';
import doneImagePath from '../../images/done.svg';
import { useAppSelector } from '../../store/store';
import Loader from '../Loader/Loader';

const OrderDetails = () => {
  const currentOrder = useAppSelector((state) => state.currentOrder);

  return (
    <>
      {currentOrder.loading ? (
        <Loader />
      ) : (
        <div className={styles.orderContainer}>
          <div>
            <h2>{currentOrder.order?.name}</h2>
            <h3>идентификатор заказа</h3>
            <h2 className={styles.orderNumber}>{currentOrder.order?.order.number}</h2>
          </div>
          <div className={styles.orderImage}>
            <img src={doneImagePath} />
          </div>
          <div>
            <p>Ваш заказ начали готовить</p>
            <p className={styles.textInactive}>Дождитесь готовности на орбитальной станции</p>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderDetails;
