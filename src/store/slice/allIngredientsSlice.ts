import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IData } from '../../utils/interfaces';
import { fetchIngredients } from '../actions/actions';

interface ISlice {
  ingredients: IData[];
  loading: boolean;
  error: boolean | null;
}

const initialState: ISlice = {
  ingredients: [],
  loading: false,
  error: null,
};

export const allIngredientsSlice = createSlice({
  name: 'allIngredients',
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<boolean | null>) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchIngredients.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchIngredients.fulfilled, (state, action) => {
      state.ingredients = action.payload.data;
      state.loading = false;
    });
    builder.addCase(fetchIngredients.rejected, (state) => {
      state.error = true;
    });
  },
});

export const { setError } = allIngredientsSlice.actions;

export default allIngredientsSlice.reducer;
