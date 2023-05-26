import React from 'react';
import { BurgerElement } from '../BurgerElement/BurgerElement';
import ConstructorItem from '../ConstructorItem/ConstructorItem';
import styles from './ConstructorList.module.css';

const ConstructorList = () => {
  return (
    <div className={styles.mainContainer}>
      <BurgerElement
        type="top"
        isLocked={true}
        text="Краторная булка N-200i (верх)"
        price={200}
        thumbnail={'https://code.s3.yandex.net/react/code/meat-04.png'}
      />
      <div className={styles.activeContainer}>
        <ConstructorItem></ConstructorItem>
        <ConstructorItem></ConstructorItem>
        <ConstructorItem></ConstructorItem>
        <ConstructorItem></ConstructorItem>
        <ConstructorItem></ConstructorItem>
        <ConstructorItem></ConstructorItem>
        <ConstructorItem></ConstructorItem>
        <ConstructorItem></ConstructorItem>
        <ConstructorItem></ConstructorItem>
      </div>
      <BurgerElement
        type="bottom"
        isLocked={true}
        text="Краторная булка N-200i (низ)"
        price={200}
        thumbnail={'https://code.s3.yandex.net/react/code/meat-04.png'}
      />
    </div>
  );
};

export default ConstructorList;
