interface IData {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
}

interface IExtData extends IData {
  key: string;
}

interface IOrderData {
  orderId: number;
}

interface IDataState {
  productData: IData[];
  loading: boolean;
}

interface IOrder {
  name: string;
  order: { number: number };
  succes: boolean;
}

interface IChangePositionIngredients {
  fromIndex: number;
  toIndex: number;
}

interface IDragItem {
  index: number;
  id: string;
  type: string;
}

interface IResponseForgot {
  success: boolean;
  message: string;
}

interface IUser {
  email: string;
  name: string;
}

interface IRegisterUser {
  email: string;
  password: string;
  name: string;
}

interface IEditUser {
  email: string;
  password?: string;
  name: string;
}

interface ILoginUser {
  email: string;
  password: string;
}

interface IRefreshToken {
  refreshToken: string;
}

interface IAccessToken {
  accessToken: string;
}

interface IResetPassData {
  password: string;
  token: string;
}

interface ISocketOrder {
  ingredients: string[];
  _id: string;
  status: string;
  name: string;
  number: number;
  createdAt: string;
  updatedAt: string;
}

interface ISocketAnswer {
  success: boolean;
  orders: ISocketOrder[];
  total: number;
  totalToday: number;
}

interface IOrderProcess {
  done: number[];
  process: number[];
}

export type {
  IData,
  IOrderData,
  IDataState,
  IExtData,
  IOrder,
  IChangePositionIngredients,
  IDragItem,
  IResponseForgot,
  IRegisterUser,
  IUser,
  IRefreshToken,
  IAccessToken,
  ILoginUser,
  IResetPassData,
  IEditUser,
  ISocketOrder,
  ISocketAnswer,
  IOrderProcess,
};
