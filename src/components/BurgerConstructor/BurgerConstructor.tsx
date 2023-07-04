import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useMemo, useState } from 'react';
import ConstructorList from './ConstructorList/ConstructorList';
import styles from './BurgerConstructor.module.css';
import Modal from '../Modal/Modal';
import OrderDetails from '../OrderDetails/OrderDetails';
import { useAppDispatch, useAppSelector } from '../../services/store';
import { IExtData } from '../../utils/interfaces';
import { placeOrder } from '../../services/actions/actions';
import { useNavigate } from 'react-router-dom';

const BurgerConstructor = () => {
  const [constructorInModal, setIngredientInModal] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const burgersData = useAppSelector((state) => state.allIngredientsCurrentBurger);
  const user = useAppSelector((state) => state.user.user);

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
    const bunId = burgersData.bun?._id;
    const ingredientsId = burgersData.ingredients.map((item) => item._id);

    if (bunId) ingredientsId.push(bunId);
    if (!user) {
      navigate('/login');
    } else {
      dispatch(placeOrder(ingredientsId));
      setIngredientInModal(true);
    }
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
          <OrderDetails />
        </Modal>
      )}
    </>
  );
};

export default BurgerConstructor;
