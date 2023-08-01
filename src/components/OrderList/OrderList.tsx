import React from 'react';
import { useMatch } from 'react-router-dom';
import { useAppSelector } from '../../services/store';
import { ISocketOrder } from '../../utils/interfaces';
import OrderItem from './OrderItem/OrderItem';
import styles from './OrderList.module.css';

interface IProps {
  orderList: ISocketOrder[];
}

const OrderList = ({ orderList }: IProps) => {
  const match = useMatch('/profile/orders');
  console.log(orderList);

  return (
    <div className={styles.activeContainer}>
      {orderList.map((item) => (
        <OrderItem key={item._id} isMatchProfileOrders={match ? true : false} orderItem={item} />
      ))}
    </div>
  );
};

export default OrderList;
