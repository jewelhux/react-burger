import { BURGER_API_URL } from './const';
import { ILoginUser, IRegisterUser, IRefreshToken, IResetPassData } from './interfaces';
import { checkResponse } from './utils';

export const fetchWithRefresh = async (url: string, options: RequestInit) => {
  try {
    const res = await fetch(url, options);
    return await checkResponse(res);
  } catch (err) {
    if ((err as Error).message === 'jwt expired') {
      const refreshData = await updateToken(); //обновляем токен
      if (!refreshData.success) {
        return Promise.reject(refreshData);
      }
      localStorage.setItem('refreshToken', refreshData.refreshToken);
      localStorage.setItem('accessToken', refreshData.accessToken);
      if (options.headers) {
        (options.headers as { [key: string]: string }).authorization = refreshData.accessToken;
      }
      const res = await fetch(url, options); //повторяем запрос
      return await checkResponse(res);
    } else {
      return Promise.reject(err);
    }
  }
};

const register = async (userData: IRegisterUser) => {
  try {
    const response = await fetch(`${BURGER_API_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...userData }),
    });
    return checkResponse(response);
  } catch (error) {
    return new Error('Incorrect user data');
  }
};

const login = async (userData: ILoginUser) => {
  try {
    const response = await fetch(`${BURGER_API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...userData }),
    });
    return checkResponse(response);
  } catch (error) {
    return new Error('Incorrect user data');
  }
};

const logout = async (tokenData: IRefreshToken) => {
  try {
    const response = await fetchWithRefresh(`${BURGER_API_URL}/auth/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...tokenData }),
    });
    return checkResponse(response);
  } catch (error) {
    return new Error('Incorrect user data');
  }
};

const updateToken = async () => {
  return fetch(`${BURGER_API_URL}/auth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      token: localStorage.getItem('refreshToken'),
    }),
  }).then(checkResponse);
};

const getUser = async () => {
  return fetch(`${BURGER_API_URL}/auth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      token: localStorage.getItem('accessToken'),
    }),
  }).then(checkResponse);
};

const forgotPass = async (mail: string) => {
  return fetch(`${BURGER_API_URL}/password-reset`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      email: mail,
    }),
  }).then(checkResponse);
};

const resetPass = async (resetPassData: IResetPassData) => {
  return fetch(`${BURGER_API_URL}/password-reset/reset`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({ ...resetPassData }),
  }).then(checkResponse);
};

export const api = {
  login,
  register,
  logout,
  updateToken,
  getUser,
  forgotPass,
  resetPass,
};
