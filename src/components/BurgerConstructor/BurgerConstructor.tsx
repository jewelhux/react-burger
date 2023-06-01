import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useState } from 'react';
import ConstructorList from './ConstructorList/ConstructorList';
import styles from './BurgerConstructor.module.css';
import { IData } from '../../utils/interfaces';
import Modal from '../Modal/Modal';
import OrderDetails from '../OrderDetails/OrderDetails';
import { OREDER_MOCK_DATA } from '../../utils/const';

interface IDataListProps {
  dataList: IData[];
}

const BurgerConstructor = ({ dataList }: IDataListProps) => {
  const [constructorInModal, setIngredientInModal] = useState(false);

  const closeConstructorModal = () => {
    setIngredientInModal(false);
  };

  const openConstructorModal = () => {
    setIngredientInModal(true);
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <ConstructorList dataList={dataList} />
        <div className={styles.orderInfo}>
          <div className={styles.orederPrice}>
            <p className={styles.mainTextDefault}>12345</p>
            <CurrencyIcon type="primary" />
          </div>
          <Button htmlType="button" type="primary" size="medium" onClick={openConstructorModal}>
            Оформить заказ
          </Button>
        </div>
      </div>
      {constructorInModal && (
        <Modal onClose={closeConstructorModal} title={''}>
          <OrderDetails orderData={OREDER_MOCK_DATA} />
        </Modal>
      )}
    </>
  );
};

export default BurgerConstructor;
