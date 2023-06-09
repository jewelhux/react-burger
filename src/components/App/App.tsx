import React, { useEffect } from 'react';
import styles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import Loader from '../Loader/Loader';
import MainPage from '../../pages/MainPage/MainPage';
import { fetchIngredients } from '../../store/actions/actions';
import { useAppDispatch, useAppSelector } from '../../store/store';

function App() {
  const allIngredients = useAppSelector((state) => state.allIngredients);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <AppHeader />
      {allIngredients.loading ? <Loader /> : <MainPage />}
    </div>
  );
}

export default App;
