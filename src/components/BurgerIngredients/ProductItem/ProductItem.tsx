import React, { useMemo } from 'react';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import {
  addIngredientsCurrentBurger,
  setBun,
} from '../../../services/slice/allIngredientsCurrentBurgerSlice';
import { setIngredient } from '../../../services/slice/currentIngredientSlice';
import { useAppDispatch, useAppSelector } from '../../../services/store';
import { IData } from '../../../utils/interfaces';
import { useDrag } from 'react-dnd';
import styles from './ProductItem.module.css';
import { ITEM_DND_TYPE } from '../../../utils/const';
import { Link, useLocation } from 'react-router-dom';

interface IDataItemProps {
  dataItem: IData;
}

interface IDropResult {
  name: string;
}

const ProductItem = ({ dataItem }: IDataItemProps) => {
  const burgersData = useAppSelector((state) => state.allIngredientsCurrentBurger);
  const location = useLocation();
  const dispatch = useAppDispatch();
  const isBun = dataItem.type === 'bun';

  const [, drag] = useDrag(() => ({
    type: ITEM_DND_TYPE.BOX,
    item: dataItem,
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<IDropResult>();
      if (item && dropResult) {
        if (isBun) {
          dispatch(setBun(item));
        } else {
          dispatch(addIngredientsCurrentBurger(item));
        }
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

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
  };

  return (
    <Link
      key={dataItem._id}
      to={`/ingredients/${dataItem._id}`}
      state={{ background: location }}
      className={styles.link}
    >
      <li className={styles.itemContainer} onClick={handleOpenPopup} ref={drag}>
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
    </Link>
  );
};

export default React.memo(ProductItem);
