import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../utils/api';
import { checkResponse } from '../../utils/burger-api';
import { BURGER_API_URL, DATA_ADRESS } from '../../utils/const';
import { IData, IRegisterUser, IResponseRegisterUser } from '../../utils/interfaces';

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
      const response = await fetch(`${BURGER_API_URL}/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ingredients }),
      });
      return checkResponse(response);
    } catch (error) {
      return rejectWithValue(new Error('Failed to place order'));
    }
  }
);

export const registerUser = createAsyncThunk<IResponseRegisterUser, IRegisterUser>(
  'auth/register',
  async (userData) => {
    const res = await api.register(userData);
    localStorage.setItem('accessToken', res.accessToken);
    localStorage.setItem('refreshToken', res.refreshToken);
    return res;
  }
);
