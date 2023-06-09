import React, { Dispatch, SetStateAction, useMemo } from 'react';
import { useAppSelector } from '../../../store/store';
import { IData } from '../../../utils/interfaces';
import ProductItem from '../ProductItem/ProductItem';
import styles from './ProductList.module.css';

interface IDataListProps {
  onSelectIngredient: Dispatch<SetStateAction<IData | null>>;
}

const ProductList = ({ onSelectIngredient }: IDataListProps) => {
  const allIngredients = useAppSelector((state) => state.allIngredients);

  const dataMain = useMemo(
    () => allIngredients.ingredients.filter((item) => item.type === 'main'),
    [allIngredients.ingredients]
  );
  const dataSauce = useMemo(
    () => allIngredients.ingredients.filter((item) => item.type === 'sauce'),
    [allIngredients.ingredients]
  );
  const dataBun = useMemo(
    () => allIngredients.ingredients.filter((item) => item.type === 'bun'),
    [allIngredients.ingredients]
  );

  if (allIngredients.ingredients.length === 0) {
    return <div className={styles.mainContainer}>Список пуст</div>;
  }

  return (
    <div className={styles.mainContainer}>
      <h2>Булки</h2>
      <ul className={styles.productGroup}>
        {dataBun.map((item) => (
          <ProductItem dataItem={item} key={item._id} onClick={onSelectIngredient} />
        ))}
      </ul>
      <h2>Соусы</h2>
      <ul className={styles.productGroup}>
        {dataSauce.map((item) => (
          <ProductItem dataItem={item} key={item._id} onClick={onSelectIngredient} />
        ))}
      </ul>
      <h2>Начинки</h2>
      <ul className={styles.productGroup}>
        {dataMain.map((item) => (
          <ProductItem dataItem={item} key={item._id} onClick={onSelectIngredient} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
