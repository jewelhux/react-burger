import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IData } from '../../utils/interfaces';

interface ISlice {
  ingredient: IData | null;
}

const initialState: ISlice = {
  ingredient: null,
};

export const currentIngredientSlice = createSlice({
  name: 'currentIngredient',
  initialState,
  reducers: {
    setIngredient: (state, action: PayloadAction<IData | null>) => {
      state.ingredient = action.payload;
    },
  },
});

export const { setIngredient } = currentIngredientSlice.actions;

export default currentIngredientSlice.reducer;
