import React from 'react';
import BurgerConstructor from '../../components/BurgerConstructor/BurgerConstructor';
import BurgerIngredients from '../../components/BurgerIngredients/BurgerIngredients';
import { MOCK_DATA } from '../../utils/DATA';
import styles from './MainPage.module.css';

const MainPage = () => {
  return (
    <div className={styles.mainContainer}>
      <BurgerIngredients dataList={MOCK_DATA}></BurgerIngredients>
      <BurgerConstructor dataList={MOCK_DATA}></BurgerConstructor>
    </div>
  );
};

export default MainPage;
