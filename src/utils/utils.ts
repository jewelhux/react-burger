import { IData } from './interfaces';

export const checkResponse = (res: Response) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return emailRegex.test(email);
};

export const isValidName = (str: string): boolean => {
  return str.length >= 3 && !/\s/.test(str);
};

export const isValidPassword = (str: string): boolean => {
  return str.length >= 6 && !/\s/.test(str);
};

export const totalOrderPrice = (ingredientList: IData[]): number => {
  let sum = 0;
  ingredientList.forEach((item) => (sum = sum + item.price));
  return sum;
};
