import React, { Dispatch, SetStateAction, useMemo } from 'react';
import { IData } from '../../../utils/interfaces';
import ProductItem from '../ProductItem/ProductItem';
import styles from './ProductList.module.css';

interface IDataListProps {
  productList: IData[];
  onSelectIngredient: Dispatch<SetStateAction<IData | null>>;
}

const ProductList = ({ productList, onSelectIngredient }: IDataListProps) => {
  const dataMain = useMemo(() => productList.filter((item) => item.type === 'main'), [productList]);
  const dataSauce = useMemo(
    () => productList.filter((item) => item.type === 'sauce'),
    [productList]
  );
  const dataBun = useMemo(() => productList.filter((item) => item.type === 'bun'), [productList]);

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
