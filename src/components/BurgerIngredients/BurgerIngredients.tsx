import React from 'react';
import { IData } from '../../utils/interfaces';
import styles from './BurgerIngredients.module.css';
import ProductList from './ProductList/ProductList';
import TabList from './TabList/TabList';

interface IDataListProps {
  dataList: IData[];
}

const BurgerIngredients = ({ dataList }: IDataListProps) => {
  return (
    <div className={styles.mainContainer}>
      <p className={styles.mainText}>Соберите бургер.</p>
      <TabList></TabList>
      <ProductList dataList={dataList}></ProductList>
    </div>
  );
};

export default BurgerIngredients;
