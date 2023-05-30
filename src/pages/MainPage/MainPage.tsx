import React from 'react';
import BurgerConstructor from '../../components/BurgerConstructor/BurgerConstructor';
import BurgerIngredients from '../../components/BurgerIngredients/BurgerIngredients';
import { IData } from '../../utils/interfaces';
import styles from './MainPage.module.css';

interface IDataProps {
  dataList: IData[];
}

const MainPage = ({ dataList }: IDataProps) => {
  return (
    <div className={styles.mainContainer}>
      <BurgerIngredients dataList={dataList}></BurgerIngredients>
      <BurgerConstructor dataList={dataList}></BurgerConstructor>
    </div>
  );
};

export default MainPage;
