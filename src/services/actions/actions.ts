import { createAsyncThunk } from '@reduxjs/toolkit';
import { checkResponse } from '../../utils/burger-api';
import { DATA_ADRESS } from '../../utils/const';
import { IData } from '../../utils/interfaces';

export const fetchIngredients = createAsyncThunk('ingredients/fetchIngredients', async () => {
  try {
    return await fetch(DATA_ADRESS).then(checkResponse);
  } catch (error) {
    return new Error();
  }
});

export const placeOrder = createAsyncThunk<IData[], string[], { rejectValue: Error }>(
  'order/placeOrder',
  async (ingredients, { rejectWithValue }) => {
    try {
      const response = await fetch('https://norma.nomoreparties.space/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ingredients }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(new Error('Failed to place order'));
    }
  }
);
