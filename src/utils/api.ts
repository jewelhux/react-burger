import { checkResponse } from './burger-api';
import { BURGER_API_URL } from './const';
import { IRegisterUser } from './interfaces';

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
export const api = {
  register,
};
