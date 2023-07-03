import React, { useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import BurgerConstructor from '../../components/BurgerConstructor/BurgerConstructor';
import BurgerIngredients from '../../components/BurgerIngredients/BurgerIngredients';
import Loader from '../../components/Loader/Loader';
import { fetchIngredients } from '../../services/actions/actions';
import { useAppDispatch, useAppSelector } from '../../services/store';
import styles from './MainPage.module.css';

const MainPage = () => {
  const allIngredients = useAppSelector((state) => state.allIngredients);

  return (
    <>
      {allIngredients.loading ? (
        <Loader />
      ) : (
        <DndProvider backend={HTML5Backend}>
          <div className={styles.mainContainer}>
            <BurgerIngredients />
            <BurgerConstructor />
          </div>
        </DndProvider>
      )}
    </>
  );
};

export default MainPage;
