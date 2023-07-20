import React from 'react';
import { useMatch } from 'react-router-dom';
import { useAppSelector } from '../../services/store';
import FeedItem from './OrderItem/OrderItem';
import styles from './OrderList.module.css';

const OrderList = () => {
  const match = useMatch('/profile/orders');
  const allIngredientsCurrentBurger = useAppSelector((state) => state.allIngredients.ingredients);

  return (
    <div className={styles.activeContainer}>
      {allIngredientsCurrentBurger.map((item, index) => (
        <FeedItem key={index} isMatch={match ? true : false} />
      ))}
    </div>
  );
};

export default OrderList;
