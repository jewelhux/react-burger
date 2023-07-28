import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../utils/api';
import { DATA_ADRESS } from '../../utils/const';
import { ILoginUser, IOrder, IRegisterUser, IUser, IEditUser } from '../../utils/interfaces';
import { checkResponse } from '../../utils/utils';

export const fetchIngredients = createAsyncThunk('ingredients/fetchIngredients', async () => {
  return await fetch(DATA_ADRESS).then(checkResponse);
});

export const placeOrder = createAsyncThunk<IOrder, string[]>(
  'order/placeOrder',
  async (ingredients) => {
    return await api.setOrder(ingredients);
  }
);

export const registerUser = createAsyncThunk<IUser, IRegisterUser>(
  'auth/register',
  async (userData) => {
    const res = await api.register(userData);
    localStorage.setItem('accessToken', res.accessToken);
    localStorage.setItem('refreshToken', res.refreshToken);
    return res.user;
  }
);

export const loginUser = createAsyncThunk<IUser, ILoginUser>('auth/login', async (userData) => {
  const res = await api.login(userData);
  localStorage.setItem('accessToken', res.accessToken);
  localStorage.setItem('refreshToken', res.refreshToken);
  return res.user;
});

export const logoutUser = createAsyncThunk('auth/logout', async () => {
  await api.logout();
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
});

export const getUser = createAsyncThunk('auth/user', async (unknown, thunkAPI) => {
  const res = await api.getUser();

  if (!res.success) {
    return thunkAPI.rejectWithValue('');
  }

  return res.user;
});

export const editUser = createAsyncThunk<IUser, IEditUser>(
  'auth/editUser',
  async (userData, thunkAPI) => {
    const res = await api.editUser(userData);

    if (!res.success) {
      return thunkAPI.rejectWithValue('');
    }
    return res.user;
  }
);

export const checkUserAuth = createAsyncThunk('auth/checkUserAuth', async (unknown, thunkAPI) => {
  if (localStorage.getItem('accessToken')) {
    await thunkAPI.dispatch(getUser());
  }
});
