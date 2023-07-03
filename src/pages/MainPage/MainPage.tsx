import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import BurgerConstructor from '../../components/BurgerConstructor/BurgerConstructor';
import BurgerIngredients from '../../components/BurgerIngredients/BurgerIngredients';
import Loader from '../../components/Loader/Loader';
import { useAppSelector } from '../../services/store';
import styles from './MainPage.module.css';

const MainPage = () => {
  const allIngredients = useAppSelector((state) => state.allIngredients);

  return (
    <>
      {allIngredients.loading ? (
        <Loader />
      ) : (
        <DndProvider backend={HTML5Backend}>
          <main className={styles.mainContainer}>
            <BurgerIngredients />
            <BurgerConstructor />
          </main>
        </DndProvider>
      )}
    </>
  );
};

export default MainPage;
