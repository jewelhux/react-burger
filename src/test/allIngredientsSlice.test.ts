import allIngredientsSlice, { initialState, setError } from '../services/slice/allIngredientsSlice';

describe('allIngredients', () => {
  it('Добавление пустого значения', () => {
    expect(allIngredientsSlice(undefined, { type: '' })).toEqual(initialState);
  });
  it('Установка ошибки', () => {
    const result = allIngredientsSlice(initialState, setError(true));
    expect(result).toEqual({
      ...initialState,
      error: true,
    });
  });
});
