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
  success: boolean;
  user: {
    email: string;
    name: string;
  };
  accessToken: string;
  refreshToken: string;
}

interface IRegisterUser {
  email: string;
  password: string;
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
};
