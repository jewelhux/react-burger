import React from 'react';
import styles from './BurgerIngredients.module.css';
import ProductListContainer from './ProductListContainer/ProductListContainer';

const BurgerIngredients = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <p className={styles.mainText}>Соберите бургер.</p>
        <ProductListContainer />
      </div>
    </>
  );
};

export default BurgerIngredients;
