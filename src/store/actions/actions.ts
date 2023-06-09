import { createAsyncThunk } from '@reduxjs/toolkit';
import { checkResponse } from '../../utils/burger-api';
import { DATA_ADRESS } from '../../utils/const';

export const fetchIngredients = createAsyncThunk('ingredients/fetchIngredients', async () => {
  try {
    return await fetch(DATA_ADRESS).then(checkResponse);
  } catch (error) {
    return new Error();
  }
});
