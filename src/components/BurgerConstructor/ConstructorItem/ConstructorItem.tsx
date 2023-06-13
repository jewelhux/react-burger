import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import { deleteIngredientsCurrentBurger } from '../../../store/slice/allIngredientsCurrentBurgerSlice';
import { useAppDispatch } from '../../../store/store';
import { IExtData } from '../../../utils/interfaces';
import { BurgerElement } from '../BurgerElement/BurgerElement';
import styles from './ConstructorItem.module.css';

interface IDataItemProps {
  dataItem: IExtData;
}

const ConstructorItem = ({ dataItem }: IDataItemProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.mainContainer}>
      <div className={styles.dragIcon}>
        <DragIcon type="primary" />
      </div>
      <BurgerElement
        text={dataItem.name}
        price={dataItem.price}
        thumbnail={dataItem.image}
        handleClose={() => dispatch(deleteIngredientsCurrentBurger(dataItem))}
      />
    </div>
  );
};

export default ConstructorItem;
