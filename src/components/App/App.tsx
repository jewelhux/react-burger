import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import Loader from '../Loader/Loader';
import MainPage from '../../pages/MainPage/MainPage';
import { DATA_ADRESS } from '../../utils/const';
import { checkResponse } from '../../utils/burger-api';

function App() {
  const [state, setState] = useState({
    productData: [],
    loading: true,
  });

  useEffect(() => {
    const getProductData = async () => {
      setState((prevState) => ({ ...prevState, loading: true }));
      try {
        const res = await fetch(DATA_ADRESS).then(checkResponse);
        setState({ productData: res.data, loading: false });
      } catch (error) {
        setState((prevState) => ({ ...prevState, loading: true }));
        return new Error();
      }
    };

    getProductData();
  }, []);

  return (
    <div className={styles.app}>
      <AppHeader />
      {state.loading ? <Loader /> : <MainPage dataList={state.productData} />}
    </div>
  );
}

export default App;
