import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import { useAppSelector } from '../../services/store';
import styles from './OrderInfo.module.css';
import OrderInfoItem from './OrderInfoItem/OrderInfoItem';

const OrderInfo = () => {
  const today = new Date();
  const allIngredientsCurrentBurger = useAppSelector((state) => state.allIngredients.ingredients);

  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.numberOrder}>#034533</h2>
      <div className={styles.mainInfo}>
        <h2>Black Hole Singularity острый бургер</h2>
        <p className={styles.status}>Выполнен</p>
      </div>
      <div className={styles.ingredients}>
        <h2>Состав:</h2>
        <div className={styles.activeContainer}>
          {allIngredientsCurrentBurger.map((item, index) => (
            <OrderInfoItem key={index} dataItem={item} />
          ))}
        </div>
      </div>
      <div className={styles.dateAndPrice}>
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
        <div className={styles.priceContainer}>
          <CurrencyIcon type="primary" />
          <p className={styles.price}>1332</p>
        </div>
      </div>
    </div>
  );
};

export default OrderInfo;
