import { createSlice } from '@reduxjs/toolkit';
import { registerUser } from '../actions/actions';
import { IResponseRegisterUser } from '../../utils/interfaces';

interface ISlice {
  user: IResponseRegisterUser | null;
  loading: boolean;
  error: null | boolean;
}

const initialState: ISlice = {
  user: null,
  loading: false,
  error: null,
};

export const registerUserSlice = createSlice({
  name: 'currentOrder',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      console.log('pending');
      state.loading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      console.log(action.payload);
      state.user = action.payload;
      state.loading = false;
    });
    builder.addCase(registerUser.rejected, (state) => {
      console.log('rejected');
      state.error = true;
    });
  },
});

export const {} = registerUserSlice.actions;

export default registerUserSlice.reducer;
