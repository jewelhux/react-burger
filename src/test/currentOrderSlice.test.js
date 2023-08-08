import currentOrderSlice, { initialState, setError } from '../services/slice/currentOrderSlice';

describe('currentOrder', () => {
  it('Добавление пустого значения', () => {
    expect(currentOrderSlice(undefined, { type: '' })).toEqual(initialState);
  });
  it('Установка ошибки', () => {
    const result = currentOrderSlice(initialState, setError(true));
    expect(result).toEqual({
      ...initialState,
      error: true,
    });
  });
});
