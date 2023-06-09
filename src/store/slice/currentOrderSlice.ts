import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IData } from '../../utils/interfaces';

interface ISlice {
  order: null | IData;
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
});

export const { setError } = currentOrderSlice.actions;

export default currentOrderSlice.reducer;
