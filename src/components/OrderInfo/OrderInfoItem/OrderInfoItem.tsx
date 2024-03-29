import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import { ITotalData } from '../../../utils/interfaces';
import styles from './OrderInfoItem.module.css';

interface IDataItemProps {
  dataItem: ITotalData;
}

const OrderInfoItem = ({ dataItem }: IDataItemProps) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={dataItem.image_mobile} />
      </div>
      <p className={styles.ingredientName}>{dataItem.name}</p>
      <p className={styles.ingredientName}>x{dataItem.totalCount}</p>
      <div className={styles.priceContainer}>
        <CurrencyIcon type="primary" />
        <p className={styles.price}>{dataItem.totalPrice}</p>
      </div>
    </div>
  );
};

export default OrderInfoItem;
