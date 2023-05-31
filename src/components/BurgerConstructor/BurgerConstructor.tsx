import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import ConstructorList from './ConstructorList/ConstructorList';
import styles from './BurgerConstructor.module.css';
import { IData } from '../../utils/interfaces';

interface IDataListProps {
  dataList: IData[];
}

const BurgerConstructor = ({ dataList }: IDataListProps) => {
  return (
    <div className={styles.mainContainer}>
      <ConstructorList dataList={dataList}></ConstructorList>
      <div className={styles.orderInfo}>
        <div className={styles.orederPrice}>
          <p className={styles.mainTextDefault}>12345</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button htmlType="button" type="primary" size="medium">
          Оформить заказ
        </Button>
      </div>
    </div>
  );
};

export default BurgerConstructor;
