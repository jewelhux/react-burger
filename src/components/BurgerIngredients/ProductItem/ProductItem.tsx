import React, { useMemo } from 'react';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import {
  addIngredientsCurrentBurger,
  setBun,
} from '../../../store/slice/allIngredientsCurrentBurgerSlice';
import { setIngredient } from '../../../store/slice/currentIngredientSlice';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { IData } from '../../../utils/interfaces';
import styles from './ProductItem.module.css';

interface IDataItemProps {
  dataItem: IData;
}

const ProductItem = ({ dataItem }: IDataItemProps) => {
  const burgersData = useAppSelector((state) => state.allIngredientsCurrentBurger);
  const dispatch = useAppDispatch();
  const isBun = dataItem.type === 'bun';

  const itemCount = useMemo(() => {
    const ingredients = burgersData.ingredients;
    const bun = burgersData.bun;

    if (isBun) {
      return dataItem.name === bun?.name ? 2 : 0;
    } else {
      return ingredients.reduce((count, item) => {
        if (item.name === dataItem.name) {
          count++;
        }
        return count;
      }, 0);
    }
  }, [burgersData.bun, burgersData.ingredients, dataItem.name, isBun]);

  const handleOpenPopup = () => {
    dispatch(setIngredient(dataItem));
    if (isBun) {
      dispatch(setBun(dataItem));
    } else {
      dispatch(addIngredientsCurrentBurger(dataItem));
    }
  };

  return (
    <li className={styles.itemContainer} onClick={handleOpenPopup}>
      {itemCount ? <Counter count={itemCount} size="default" extraClass="m-1" /> : <></>}
      <div className={styles.itemImage}>
        <img src={dataItem.image} alt="item" />
      </div>
      <div className={styles.itemPrice}>
        <p className={styles.itemPriceText}>{dataItem.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={styles.itemName}>{dataItem.name}</p>
    </li>
  );
};

export default React.memo(ProductItem);
