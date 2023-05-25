import React from 'react';
import BurgerIngredients from '../../components/BurgerIngredients/BurgerIngredients';
import styles from './MainPage.module.css';

const MainPage = () => {
  return (
    <div className={styles.mainContainer}>
      <BurgerIngredients></BurgerIngredients>
    </div>
  );
};

export default MainPage;
