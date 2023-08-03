import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { getOrder } from '../../services/actions';
import { useAppDispatch, useAppSelector } from '../../services/store';
import { IData } from '../../utils/interfaces';
import { groupingIngredients, totalOrderPrice } from '../../utils/utils';
import styles from './OrderInfo.module.css';
import OrderInfoItem from './OrderInfoItem/OrderInfoItem';

const OrderInfo = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const orderId = params.orderId ?? '';

  const allIngredientsBurger = useAppSelector((state) => state.allIngredients.ingredients);
  const currentOrder = useAppSelector((state) => {
    let order = state.feedOrders.orderList.find((el) => el.number === Number(orderId));
    if (order) {
      return order;
    }

    order = state.profileOrders.orderList.find((el) => el.number === Number(orderId));
    if (order) {
      return order;
    }

    return state.currentOrder.orderModal;
  });

  useEffect(() => {
    if (!currentOrder) {
      dispatch(getOrder(orderId));
    }
  }, [currentOrder, dispatch, orderId]);

  const currentListIngidients = useMemo(
    () =>
      currentOrder?.ingredients.reduce<IData[]>((previousValue, currentValue) => {
        const findElement = allIngredientsBurger?.find((item) => item._id === currentValue);
        if (!!findElement) {
          previousValue.push(findElement);
        }
        return previousValue;
      }, []) ?? [],
    [allIngredientsBurger, currentOrder?.ingredients]
  );

  const updateCurrentIngredientList = useMemo(() => {
    return groupingIngredients(currentListIngidients);
  }, [currentListIngidients]);

  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.numberOrder}>#{currentOrder?.number ?? 'Данные загружаются'}</h2>
      <div className={styles.mainInfo}>
        <h2>{currentOrder?.name ?? 'Данные загружаются'}</h2>
        <p className={styles.orderStatus}>
          {currentOrder?.status.toUpperCase() ?? 'Данные загружаются'}
        </p>
      </div>
      <div className={styles.ingredients}>
        <h2>Состав:</h2>
        <div className={styles.activeContainer}>
          {updateCurrentIngredientList.map((item, index) => (
            <OrderInfoItem key={index} dataItem={item} />
          ))}
        </div>
      </div>
      <div className={styles.dateAndPrice}>
        <FormattedDate className={styles.time} date={new Date(`${currentOrder?.createdAt}`)} />
        <div className={styles.priceContainer}>
          <CurrencyIcon type="primary" />
          <p className={styles.price}>
            {totalOrderPrice(currentListIngidients) ?? 'Данные загружаются'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderInfo;
