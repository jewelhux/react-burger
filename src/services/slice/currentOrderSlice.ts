import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getOrder, placeOrder } from '../actions';
import { IOrder, ISocketOrder } from '../../utils/interfaces';

interface ISlice {
  order: IOrder | null;
  orderModal: ISocketOrder | null;
  loading: boolean;
  error: null | boolean;
}

export const initialState: ISlice = {
  order: null,
  orderModal: null,
  loading: false,
  error: null,
};

export const currentOrderSlice = createSlice({
  name: 'currentOrder',
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<boolean | null>) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(placeOrder.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(placeOrder.fulfilled, (state, action) => {
      state.order = JSON.parse(JSON.stringify(action.payload));
      state.loading = false;
    });
    builder.addCase(placeOrder.rejected, (state) => {
      state.error = true;
    });
    builder.addCase(getOrder.fulfilled, (state, action) => {
      state.orderModal = action.payload;
    });
  },
});

export const { setError } = currentOrderSlice.actions;

export default currentOrderSlice.reducer;
