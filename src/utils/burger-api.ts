import { Dispatch, SetStateAction } from 'react';
import { DATA_ADRESS } from './const';
import { IDataState } from './interfaces';

const getProductData = async (setState: Dispatch<SetStateAction<IDataState>>) => {
  setState((prevState) => ({ ...prevState, loading: true }));
  try {
    const res = await fetch(DATA_ADRESS).then(checkResponse);
    setState({ productData: res.data, loading: false });
  } catch (error) {
    setState((prevState) => ({ ...prevState, loading: true }));
    return new Error();
  }
};

const checkResponse = (res: Response) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export { checkResponse, getProductData };
