import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import {
  addIngredientsCurrentBurger,
  setBun,
} from '../../../store/slice/allIngredientsCurrentBurgerSlice';
import { setIngredient } from '../../../store/slice/currentIngredientSlice';
import { useAppDispatch } from '../../../store/store';
import { IData } from '../../../utils/interfaces';
import styles from './ProductItem.module.css';

interface IDataItemProps {
  dataItem: IData;
}

const ProductItem = ({ dataItem }: IDataItemProps) => {
  const dispatch = useAppDispatch();
  const isBun = dataItem.type === 'bun' ? true : false;

  const handleOpenPopup = () => {
    dispatch(setIngredient(dataItem));
    if (isBun) {
      dispatch(setBun(dataItem));
    } else {
      dispatch(addIngredientsCurrentBurger(dataItem));
    }
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
