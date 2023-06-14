import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useMemo } from 'react';
import { useAppSelector } from '../../../store/store';
import IngredientCategory from '../ProductList/IngredientCategory';
import styles from './ProductListContainer.module.css';

const ProductListContainer = () => {
  const allIngredients = useAppSelector((state) => state.allIngredients);
  const [currentTab, setCurrentTab] = React.useState('Булки');

  const dataMain = useMemo(
    () => allIngredients.ingredients.filter((item) => item.type === 'main'),
    [allIngredients.ingredients]
  );
  const dataSauce = useMemo(
    () => allIngredients.ingredients.filter((item) => item.type === 'sauce'),
    [allIngredients.ingredients]
  );
  const dataBun = useMemo(
    () => allIngredients.ingredients.filter((item) => item.type === 'bun'),
    [allIngredients.ingredients]
  );

  if (allIngredients.ingredients.length === 0) {
    return <div className={styles.mainContainer}>Список пуст</div>;
  }

  return (
    <>
      <div className={styles.tabsContainer}>
        <Tab value="Булки" active={currentTab === 'Булки'} onClick={setCurrentTab}>
          Булки
        </Tab>
        <Tab value="Соусы" active={currentTab === 'Соусы'} onClick={setCurrentTab}>
          Соусы
        </Tab>
        <Tab value="Начинки" active={currentTab === 'Начинки'} onClick={setCurrentTab}>
          Начинки
        </Tab>
      </div>
      <ul className={styles.mainContainer}>
        <li>
          <IngredientCategory ingredientList={dataBun} />
        </li>
        <li>
          <IngredientCategory ingredientList={dataSauce} />
        </li>
        <li>
          <IngredientCategory ingredientList={dataMain} />
        </li>
      </ul>
    </>
  );
};

export default ProductListContainer;
