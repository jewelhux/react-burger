import React from 'react';
import styles from './BurgerIngredients.module.css';
import ProductList from './ProductList/ProductList';
import TabList from './TabList/TabList';

const BurgerIngredients = () => {
  return (
    <div className={styles.mainContainer}>
      <p className={styles.mainText}>Соберите бургер.</p>
      <TabList></TabList>
      <ProductList></ProductList>
    </div>
  );
};

export default BurgerIngredients;
