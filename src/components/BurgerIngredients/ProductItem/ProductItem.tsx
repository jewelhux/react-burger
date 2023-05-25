import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import styles from './ProductItem.module.css';

const ProductItem = () => {
  return (
    <li className={styles.itemContainer}>
      <Counter count={1} size="default" extraClass="m-1" />
      <div className={styles.itemImage}>
        <img src="https://code.s3.yandex.net/react/code/meat-04.png" alt="item" />
      </div>
      <div className={styles.itemPrice}>
        <p className={styles.itemPriceText}>20</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={styles.itemName}>Краторная булка N-023-33</p>
    </li>
  );
};

export default ProductItem;
