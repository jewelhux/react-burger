import React from 'react';
import { setIngredient } from '../../store/slice/currentIngredientSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import Modal from '../Modal/Modal';
import styles from './BurgerIngredients.module.css';
import ProductList from './ProductList/ProductList';
import TabList from './TabList/TabList';

const BurgerIngredients = () => {
  const currentIngredient = useAppSelector((state) => state.currentIngredient);
  const dispatch = useAppDispatch();

  const closeIngredientModal = () => {
    dispatch(setIngredient(null));
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <p className={styles.mainText}>Соберите бургер.</p>
        <TabList />
        <ProductList />
      </div>
      {currentIngredient.ingredient && (
        <Modal onClose={closeIngredientModal} title={'Выберите ингридиенты'}>
          <IngredientDetails item={currentIngredient.ingredient} />
        </Modal>
      )}
    </>
  );
};

export default BurgerIngredients;
