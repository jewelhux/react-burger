import React from 'react';
import { IOrderData } from '../../utils/interfaces';
import styles from './OrderDetails.module.css';
import doneImagePath from '../../images/done.svg';

interface IOrderDetailsProps {
  orderData: IOrderData;
}

const OrderDetails = ({ orderData }: IOrderDetailsProps) => {
  return (
    <div className={styles.orderContainer}>
      <div>
        <h2 className={styles.orderNumber}>{orderData.orderId}</h2>
        <h3>идентификатор заказа</h3>
      </div>
      <div className={styles.orderImage}>
        <img src={doneImagePath}></img>
      </div>
      <div>
        <p>Ваш заказ начали готовить</p>
        <p className={styles.textInactive}>Дождитесь готовности на орбитальной станции</p>
      </div>
    </div>
  );
};

export default OrderDetails;
