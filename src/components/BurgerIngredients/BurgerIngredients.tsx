import React, { useState } from 'react';
import { IData } from '../../utils/interfaces';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import Modal from '../Modal/Modal';
import styles from './BurgerIngredients.module.css';
import ProductList from './ProductList/ProductList';
import TabList from './TabList/TabList';

interface IDataListProps {
  dataList: IData[];
}

const BurgerIngredients = ({ dataList }: IDataListProps) => {
  const [ingredientInModal, setIngredientInModal] = useState<IData | null>(null);

  const closeIngredientModal = () => {
    setIngredientInModal(null);
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <p className={styles.mainText}>Соберите бургер.</p>
        <TabList></TabList>
        <ProductList productList={dataList} onSelectIngredient={setIngredientInModal}></ProductList>
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
