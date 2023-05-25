import React from 'react';
import ProductItem from '../ProductItem/ProductItem';
import styles from './ProductList.module.css';

const ProductList = () => {
  return (
    <div className={styles.mainContainer}>
      <h2>Булки</h2>
      <ul className={styles.productGroup}>
        <ProductItem></ProductItem>
        <ProductItem></ProductItem>
        <ProductItem></ProductItem>
      </ul>
      <h2>Соусы</h2>
      <ul className={styles.productGroup}>
        <ProductItem></ProductItem>
        <ProductItem></ProductItem>
        <ProductItem></ProductItem>
      </ul>
      <h2>Начинки</h2>
      <ul className={styles.productGroup}>
        <ProductItem></ProductItem>
        <ProductItem></ProductItem>
        <ProductItem></ProductItem>
      </ul>
    </div>
  );
};

export default ProductList;
