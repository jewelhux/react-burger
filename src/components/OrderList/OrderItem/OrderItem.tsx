import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../../services/store';
import styles from './OrderItem.module.css';

interface IProps {
  isMatchProfileOrders: boolean;
}

const OrderItem = ({ isMatchProfileOrders }: IProps) => {
  const today = new Date();
  const location = useLocation();
  const allIngredientsCurrentBurger = useAppSelector((state) => state.allIngredients.ingredients);
  const path = isMatchProfileOrders ? '/profile/orders/123' : '/feed/123';

  return (
    <Link
      className={styles.itemContainer}
      to={path}
      state={
        isMatchProfileOrders
          ? { backgroundProfileOrders: location }
          : { backgroundFeedOrders: location }
      }
    >
      <div className={styles.topSection}>
        <p className={styles.orderNumber}>#034535</p>
        <FormattedDate
          className={styles.time}
          date={
            new Date(
              today.getFullYear(),
              today.getMonth(),
              today.getDate(),
              today.getHours(),
              today.getMinutes() - 1,
              0
            )
          }
        />
      </div>
      <h3>Death Star Starship Main бургер</h3>
      {isMatchProfileOrders ? <p>Статус заказа</p> : <></>}
      <div className={styles.bottomSection}>
        <div className={styles.allImageContainer}>
          {allIngredientsCurrentBurger.slice(0, 6).map((item, index) => (
            <div className={styles.imageContainer} key={index}>
              <img className={styles.image} src={item.image_mobile} key={index} />
              {index === 5 ? <span className={styles.lastImagetext}>+5</span> : <></>}
            </div>
          ))}
        </div>
        <div className={styles.priceContainer}>
          <CurrencyIcon type="primary" />
          <p className={styles.price}>12</p>
        </div>
      </div>
    </Link>
  );
};

export default OrderItem;
