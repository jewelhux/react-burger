import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import { setIngredient } from '../../../store/slice/currentIngredientSlice';
import { useAppDispatch } from '../../../store/store';
import { IData } from '../../../utils/interfaces';
import styles from './ProductItem.module.css';

interface IDataItemProps {
  dataItem: IData;
}

const ProductItem = ({ dataItem }: IDataItemProps) => {
  const dispatch = useAppDispatch();

  const handleOpenPopup = () => {
    dispatch(setIngredient(dataItem));
  };

  return (
    <>
      <li className={styles.itemContainer} onClick={handleOpenPopup}>
        <Counter count={1} size="default" extraClass="m-1" />
        <div className={styles.itemImage}>
          <img src={dataItem.image} alt="item" />
        </div>
        <div className={styles.itemPrice}>
          <p className={styles.itemPriceText}>{dataItem.price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <p className={styles.itemName}>{dataItem.name}</p>
      </li>
    </>
  );
};

export default React.memo(ProductItem);
