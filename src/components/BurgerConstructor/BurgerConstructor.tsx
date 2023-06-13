import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useMemo, useState } from 'react';
import ConstructorList from './ConstructorList/ConstructorList';
import styles from './BurgerConstructor.module.css';
import Modal from '../Modal/Modal';
import OrderDetails from '../OrderDetails/OrderDetails';
import { OREDER_MOCK_DATA } from '../../utils/const';
import { useAppSelector } from '../../store/store';
import { IExtData } from '../../utils/interfaces';

const BurgerConstructor = () => {
  const [constructorInModal, setIngredientInModal] = useState(false);
  const burgersData = useAppSelector((state) => state.allIngredientsCurrentBurger);

  const totalPrice = useMemo(() => {
    const bun = burgersData.bun;
    const ingredients = burgersData.ingredients;

    const bunPrice = bun ? bun.price * 2 : 0;
    const ingredientsPrice = ingredients.reduce(
      (acc: number, item: IExtData) => acc + item.price,
      0
    );

    return bunPrice + ingredientsPrice;
  }, [burgersData]);

  const closeConstructorModal = () => {
    setIngredientInModal(false);
  };

  const openConstructorModal = () => {
    setIngredientInModal(true);
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <ConstructorList />
        <div className={styles.orderInfo}>
          <div className={styles.orederPrice}>
            <p className={styles.mainTextDefault}>{totalPrice}</p>
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
