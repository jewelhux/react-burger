import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import Loader from '../Loader/Loader';
import MainPage from '../../pages/MainPage/MainPage';
import { getProductData } from '../../utils/burger-api';
import { IDataState } from '../../utils/interfaces';

function App() {
  const [state, setState] = useState<IDataState>({
    productData: [],
    loading: true,
  });

  useEffect(() => {
    getProductData(setState);
  }, []);

  return (
    <div className={styles.app}>
      <AppHeader />
      {state.loading ? <Loader /> : <MainPage dataList={state.productData} />}
    </div>
  );
}

export default App;
