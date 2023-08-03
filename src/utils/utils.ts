import { IData, IOrderProcess, ISocketOrder, ITotalData } from './interfaces';

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

export const orderListInfo = (orderList: ISocketOrder[]): IOrderProcess => {
  const result: IOrderProcess = {
    done: [],
    process: [],
  };

  orderList.slice(0, 20).forEach((item) => {
    if (item.status === 'done') {
      result.done.push(item.number);
    } else {
      result.process.push(item.number);
    }
  });

  return result;
};

export const groupingIngredients = (ingredientList: IData[]): ITotalData[] => {
  const result: ITotalData[] = [];
  const groupedById: { [key: string]: ITotalData } = {};

  ingredientList.forEach((item) => {
    if (!groupedById[item._id]) {
      groupedById[item._id] = { ...item, totalPrice: item.price, totalCount: 1 };
      result.push(groupedById[item._id]);
    } else {
      groupedById[item._id].totalPrice += item.price;
      groupedById[item._id].totalCount += 1;
    }
  });

  return result;
};
