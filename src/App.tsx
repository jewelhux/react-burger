import React, { useEffect, useState } from 'react';
import './App.css';
import AppHeader from './components/AppHeader/AppHeader';
import Loader from './components/Loader/Loader';
import MainPage from './pages/MainPage/MainPage';
import { DATA_ADRESS } from './utils/const';

function App() {
  const [state, setState] = useState({
    productData: [],
    loading: true,
  });

  useEffect(() => {
    const getProductData = async () => {
      setState((prevState) => ({ ...prevState, loading: true }));
      try {
        const res = await fetch(DATA_ADRESS);
        const productList = await res.json();
        setState({ productData: productList.data, loading: false });
      } catch (error) {
        setState((prevState) => ({ ...prevState, loading: true }));
        return new Error();
      }
    };

    getProductData();
  }, []);

  return (
    <div className="App">
      <AppHeader />
      {state.loading ? <Loader /> : <MainPage dataList={state.productData} />}
    </div>
  );
}

export default App;
