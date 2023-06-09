import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import allIngredientsCurrentBurgerSlice from './slice/allIngredientsCurrentBurgerSlice';
import allIngredientsSlice from './slice/allIngredientsSlice';
import currentIngredientSlice from './slice/currentIngredientSlice';
import currentOrderSlice from './slice/currentOrderSlice';

export const store = configureStore({
  reducer: {
    allIngredientsCurrentBurger: allIngredientsCurrentBurgerSlice,
    allIngredients: allIngredientsSlice,
    currentIngredient: currentIngredientSlice,
    currentOrder: currentOrderSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
