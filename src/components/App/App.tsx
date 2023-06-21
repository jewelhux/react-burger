import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import Loader from '../Loader/Loader';
import MainPage from '../../pages/MainPage/MainPage';
import { fetchIngredients } from '../../services/actions/actions';
import { useAppDispatch, useAppSelector } from '../../services/store';
import ResetPassPage from '../../pages/ResetPassPage/ResetPassPage';

function App() {
  const allIngredients = useAppSelector((state) => state.allIngredients);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  return (
    <Router>
      <div className={styles.app}>
        <AppHeader />
        {allIngredients.loading ? <Loader /> : <ResetPassPage />}
      </div>
    </Router>
  );
}

export default App;
