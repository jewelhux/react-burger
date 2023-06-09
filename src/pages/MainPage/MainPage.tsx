import React from 'react';
import BurgerConstructor from '../../components/BurgerConstructor/BurgerConstructor';
import BurgerIngredients from '../../components/BurgerIngredients/BurgerIngredients';
import styles from './MainPage.module.css';

const MainPage = () => {
  return (
    <div className={styles.mainContainer}>
      <BurgerIngredients />
      <BurgerConstructor />
    </div>
  );
};

export default MainPage;
