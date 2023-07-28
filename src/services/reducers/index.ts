import { combineReducers } from 'redux';
import allIngredientsCurrentBurgerSlice from '../slice/allIngredientsCurrentBurgerSlice';
import allIngredientsSlice from '../slice/allIngredientsSlice';
import currentIngredientSlice from '../slice/currentIngredientSlice';
import currentOrderSlice from '../slice/currentOrderSlice';
import userSlice from '../slice/userSlice';

const comboReducer = combineReducers({
  allIngredientsCurrentBurger: allIngredientsCurrentBurgerSlice,
  allIngredients: allIngredientsSlice,
  currentIngredient: currentIngredientSlice,
  currentOrder: currentOrderSlice,
  user: userSlice,
});

export default comboReducer;
