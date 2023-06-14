import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useMemo, useRef, useState } from 'react';
import { useAppSelector } from '../../../store/store';
import IngredientCategory from '../ProductList/IngredientCategory';
import styles from './ProductListContainer.module.css';

const ProductListContainer: React.FC = () => {
  const allIngredients = useAppSelector((state) => state.allIngredients);
  const [currentTab, setCurrentTab] = useState<string>('Булки');
  const tabsRef = useRef<HTMLDivElement>(null);
  const bunRef = useRef<HTMLLIElement>(null);
  const sauceRef = useRef<HTMLLIElement>(null);
  const mainRef = useRef<HTMLLIElement>(null);

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

  const handleScroll = () => {
    const tabsRect = tabsRef.current!.getBoundingClientRect();
    const bunRect = bunRef.current!.getBoundingClientRect();
    const sauceRect = sauceRef.current!.getBoundingClientRect();
    const mainRect = mainRef.current!.getBoundingClientRect();

    const distances: { [key: string]: number } = {
      Булки: Math.abs(tabsRect.bottom - bunRect.top),
      Соусы: Math.abs(tabsRect.bottom - sauceRect.top),
      Начинки: Math.abs(tabsRect.bottom - mainRect.top),
    };

    const closestTab = Object.keys(distances).reduce((a: string, b: string) =>
      distances[a] < distances[b] ? a : b
    );

    setCurrentTab(closestTab);
  };

  if (allIngredients.ingredients.length === 0) {
    return <div className={styles.mainContainer}>Список пуст</div>;
  }

  return (
    <>
      <div className={styles.tabsContainer} ref={tabsRef}>
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
      <ul className={styles.mainContainer} onScroll={handleScroll}>
        <li ref={bunRef}>
          <IngredientCategory ingredientList={dataBun} />
        </li>
        <li ref={sauceRef}>
          <IngredientCategory ingredientList={dataSauce} />
        </li>
        <li ref={mainRef}>
          <IngredientCategory ingredientList={dataMain} />
        </li>
      </ul>
    </>
  );
};

export default ProductListContainer;
