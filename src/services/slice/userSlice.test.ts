import userSlice, { initialState, setAuthChecked, setUser } from './userSlice';

describe('user', () => {
  const MOCK_DATA = {
    user: null,
    isAuthChecked: false,
  };

  it('Добавление пустого значения', () => {
    expect(userSlice(undefined, { type: '' })).toEqual(initialState);
  });
  it('Изменение авторизации', () => {
    const result = userSlice(initialState, setAuthChecked(MOCK_DATA.isAuthChecked));
    expect(result).toEqual({
      ...initialState,
      isAuthChecked: MOCK_DATA.isAuthChecked,
    });
  });
  it('Изменение пользователя', () => {
    const result = userSlice(initialState, setUser(MOCK_DATA.user));
    expect(result).toEqual({
      ...initialState,
      user: MOCK_DATA.user,
    });
  });
});
