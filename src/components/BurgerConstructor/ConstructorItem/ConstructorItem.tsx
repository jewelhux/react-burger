import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import { IData } from '../../../utils/interfaces';
import { BurgerElement } from '../BurgerElement/BurgerElement';
import styles from './ConstructorItem.module.css';

interface IDataItemProps {
  dataItem: IData;
}

const ConstructorItem = ({ dataItem }: IDataItemProps) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.dragIcon}>
        <DragIcon type="primary" />
      </div>
      <BurgerElement text={dataItem.name} price={dataItem.price} thumbnail={dataItem.image} />
    </div>
  );
};

export default ConstructorItem;
