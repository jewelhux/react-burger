import React, { useState } from 'react';
import { IData } from '../../utils/interfaces';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import Modal from '../Modal/Modal';
import styles from './BurgerIngredients.module.css';
import ProductList from './ProductList/ProductList';
import TabList from './TabList/TabList';

const BurgerIngredients = () => {
  const [ingredientInModal, setIngredientInModal] = useState<IData | null>(null);

  const closeIngredientModal = () => {
    setIngredientInModal(null);
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <p className={styles.mainText}>Соберите бургер.</p>
        <TabList></TabList>
        <ProductList onSelectIngredient={setIngredientInModal}></ProductList>
      </div>
      {ingredientInModal && (
        <Modal onClose={closeIngredientModal} title={'Выберите ингридиенты'}>
          <IngredientDetails item={ingredientInModal} />
        </Modal>
      )}
    </>
  );
};

export default BurgerIngredients;
