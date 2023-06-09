import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IData } from '../../utils/interfaces';

interface ISlice {
  bun: IData | null;
  ingredients: IData[];
}

const initialState: ISlice = {
  bun: null,
  ingredients: [],
};

export const allIngredientsCurrentBurgerSlice = createSlice({
  name: 'allIngredientsCurrentBurger',
  initialState,
  reducers: {
    setBun: (state, action: PayloadAction<IData | null>) => {
      state.bun = action.payload;
    },
  },
});

export const { setBun } = allIngredientsCurrentBurgerSlice.actions;

export default allIngredientsCurrentBurgerSlice.reducer;
