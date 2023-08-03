import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../../services/store';
import { IData, ISocketOrder } from '../../../utils/interfaces';
import { totalOrderPrice } from '../../../utils/utils';
import styles from './OrderItem.module.css';

interface IProps {
  orderItem: ISocketOrder;
  isMatchProfileOrders: boolean;
}

const OrderItem = ({ isMatchProfileOrders, orderItem }: IProps) => {
  const location = useLocation();
  const allIngredientsBurger = useAppSelector((state) => state.allIngredients.ingredients);
  const path = isMatchProfileOrders
    ? `/profile/orders/${orderItem.number}`
    : `/feed/${orderItem.number}`;

  const currentListIngidients = orderItem?.ingredients.reduce<IData[]>(
    (previousValue, currentValue) => {
      const priceObject = allIngredientsBurger?.find((item) => item._id === currentValue);
      if (!!priceObject) {
        previousValue.push(priceObject);
      }
      return previousValue;
    },
    []
  );

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
        <p className={styles.orderNumber}>#{orderItem.number}</p>
        <FormattedDate className={styles.time} date={new Date(`${orderItem?.createdAt}`)} />
      </div>
      <h3>{orderItem.name}</h3>
      {isMatchProfileOrders ? (
        <p>
          Статус заказа: <span className={styles.done}>{orderItem.status.toUpperCase()}</span>
        </p>
      ) : (
        <></>
      )}
      <div className={styles.bottomSection}>
        <div className={styles.allImageContainer}>
          {currentListIngidients.slice(0, 6).map((item, index) => {
            return (
              <div className={styles.imageContainer} key={index}>
                <img className={styles.image} src={item.image_mobile} key={index} />
                {index === 5 ? (
                  <span className={styles.lastImagetext}>+{currentListIngidients.length - 5}</span>
                ) : (
                  <></>
                )}
              </div>
            );
          })}
        </div>
        <div className={styles.priceContainer}>
          <CurrencyIcon type="primary" />
          <p className={styles.price}>{totalOrderPrice(currentListIngidients)}</p>
        </div>
      </div>
    </Link>
  );
};

export default OrderItem;
