import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { placeOrder } from '../actions/actions';
import { IOrder } from '../../utils/interfaces';

interface ISlice {
  order: IOrder | null;
  loading: boolean;
  error: null | boolean;
}

const initialState: ISlice = {
  order: null,
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
  },
});

export const { setError } = currentOrderSlice.actions;

export default currentOrderSlice.reducer;
