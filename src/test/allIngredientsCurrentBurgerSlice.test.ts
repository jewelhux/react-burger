import allIngredientsCurrentBurgerSlice, {
  addIngredientsCurrentBurger,
  deleteIngredientsCurrentBurger,
  initialState,
  moveIngredientsCurrentBurger,
  setBun,
} from '../services/slice/allIngredientsCurrentBurgerSlice';

describe('allIngredientsCurrentBurger', () => {
  const MOCK_BUN = {
    _id: '643d69a5c3f7b9001cfa093c',
    name: 'Краторная булка N-200i',
    type: 'bun',
    proteins: 80,
    fat: 24,
    carbohydrates: 53,
    calories: 420,
    price: 1255,
    image: 'https://code.s3.yandex.net/react/code/bun-02.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
    __v: 0,
  };

  const MOCK_INGREDIENT = {
    _id: '643d69a5c3f7b9001cfa0942',
    name: 'Соус Spicy-X',
    type: 'sauce',
    proteins: 30,
    fat: 20,
    carbohydrates: 40,
    calories: 30,
    price: 90,
    image: 'https://code.s3.yandex.net/react/code/sauce-02.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/sauce-02-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/sauce-02-large.png',
    __v: 0,
  };

  it('Добавление пустого значения', () => {
    expect(allIngredientsCurrentBurgerSlice(undefined, { type: '' })).toEqual(initialState);
  });
  it('Добавление булочки', () => {
    const result = allIngredientsCurrentBurgerSlice(initialState, setBun(MOCK_BUN));
    expect(result).toEqual({ ...initialState, bun: MOCK_BUN });
  });
  it('Добавление ингредиента', () => {
    const PL = {
      type: addIngredientsCurrentBurger.type,
      payload: { key: '123456789', ...MOCK_INGREDIENT },
    };

    const result = allIngredientsCurrentBurgerSlice(initialState, PL);

    expect(result).toEqual({
      ...initialState,
      ingredients: [{ ...MOCK_INGREDIENT, key: '123456789' }],
    });
  });
  it('Удаление ингредиента', () => {
    const state = {
      ...initialState,
      ingredients: [{ ...MOCK_INGREDIENT, key: '123456789' }],
    };

    const result = allIngredientsCurrentBurgerSlice(
      state,
      deleteIngredientsCurrentBurger({ ...MOCK_INGREDIENT, key: '123456789' })
    );

    expect(result).toEqual({
      ...initialState,
      ingredients: [],
    });
  });
  it('Перемещение элемента', () => {
    const state = {
      ...initialState,
      ingredients: [
        { ...MOCK_INGREDIENT, key: '123' },
        { ...MOCK_INGREDIENT, key: '456' },
      ],
    };

    const result = allIngredientsCurrentBurgerSlice(
      state,
      moveIngredientsCurrentBurger({ fromIndex: 1, toIndex: 0 })
    );

    expect(result).toEqual({
      ...initialState,
      ingredients: [
        { ...MOCK_INGREDIENT, key: '456' },
        { ...MOCK_INGREDIENT, key: '123' },
      ],
    });
  });
});
