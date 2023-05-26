import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import { BurgerElement } from '../BurgerElement/BurgerElement';
import styles from './ConstructorItem.module.css';

const ConstructorItem = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.dragIcon}>
        <DragIcon type="primary" />
      </div>
      <BurgerElement
        text="Краторная булка N-200i (верх)"
        price={50}
        thumbnail={'https://code.s3.yandex.net/react/code/meat-04.png'}
      />
    </div>
  );
};

export default ConstructorItem;
