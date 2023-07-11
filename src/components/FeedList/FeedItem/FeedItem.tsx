import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import { useAppSelector } from '../../../services/store';
import styles from './FeedItem.module.css';

const FeedItem = () => {
  const today = new Date();
  const allIngredientsCurrentBurger = useAppSelector((state) => state.allIngredients.ingredients);

  return (
    <div className={styles.itemContainer}>
      <div className={styles.topSection}>
        <p>#034535</p>
        <FormattedDate
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
      <div className={styles.bottomSection}>
        <div className={styles.imageContainer}>
          {allIngredientsCurrentBurger.slice(0, 4).map((item, index) => (
            <img className={styles.image} src={item.image_mobile} key={index} />
          ))}
        </div>
        <div className={styles.priceContainer}>
          <CurrencyIcon type="primary" />
          <p className={styles.price}>12</p>
        </div>
      </div>
    </div>
  );
};

export default FeedItem;
