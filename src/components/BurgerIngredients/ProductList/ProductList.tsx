import React, { Dispatch, SetStateAction, useMemo } from 'react';
import { IData } from '../../../utils/interfaces';
import ProductItem from '../ProductItem/ProductItem';
import styles from './ProductList.module.css';

interface IDataListProps {
  dataList: IData[];
  onSelectIngredient: Dispatch<SetStateAction<IData | null>>;
}

const ProductList = ({ dataList, onSelectIngredient }: IDataListProps) => {
  const dataMain = useMemo(() => dataList.filter((item) => item.type === 'main'), [dataList]);
  const dataSauce = useMemo(() => dataList.filter((item) => item.type === 'sauce'), [dataList]);
  const dataBun = useMemo(() => dataList.filter((item) => item.type === 'bun'), [dataList]);

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
