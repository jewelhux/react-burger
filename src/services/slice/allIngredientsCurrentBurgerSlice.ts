import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { IChangePositionIngredients, IData, IExtData } from '../../utils/interfaces';

interface ISlice {
  bun: IData | null;
  ingredients: IExtData[];
}

const initialState: ISlice = {
  bun: null,
  ingredients: [],
};

export const allIngredientsCurrentBurgerSlice = createSlice({
  name: 'allIngredientsCurrentBurger',
  initialState,
  reducers: {
    setBun: (state, action: PayloadAction<IData>) => {
      state.bun = action.payload;
    },
    addIngredientsCurrentBurger: {
      reducer: (state, action: PayloadAction<IExtData>) => {
        if (action.payload) {
          state.ingredients.push(action.payload);
        }
      },
      prepare: (ingredient: IData): { payload: IExtData } => {
        const key = nanoid();
        return { payload: { key, ...ingredient } };
      },
    },
    deleteIngredientsCurrentBurger: (state, action: PayloadAction<IExtData>) => {
      state.ingredients = state.ingredients.filter((item) => item.key !== action.payload.key);
    },
    moveIngredientsCurrentBurger: (state, action: PayloadAction<IChangePositionIngredients>) => {
      state.ingredients.splice(
        action.payload.toIndex,
        0,
        state.ingredients.splice(action.payload.fromIndex, 1)[0]
      );
    },
  },
});

export const {
  setBun,
  addIngredientsCurrentBurger,
  deleteIngredientsCurrentBurger,
  moveIngredientsCurrentBurger,
} = allIngredientsCurrentBurgerSlice.actions;

export default allIngredientsCurrentBurgerSlice.reducer;
