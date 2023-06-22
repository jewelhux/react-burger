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

interface IRegisterUser {
  email: string;
  password: string;
  name: string;
}

interface IResponseRegisterUser {
  success: boolean;
  user: {
    email: string;
    name: string;
  };
  accessToken: string;
  refreshToken: string;
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
  IResponseRegisterUser,
};
