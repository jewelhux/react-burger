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

interface DragItem {
  index: number;
  id: string;
  type: string;
}

export type {
  IData,
  IOrderData,
  IDataState,
  IExtData,
  IOrder,
  IChangePositionIngredients,
  DragItem,
};
