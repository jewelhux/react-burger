import { createSlice } from '@reduxjs/toolkit';
import {
  checkUserAuth,
  loginUser,
  logoutUser,
  registerUser,
  updateUserToken,
} from '../actions/actions';
import { IUser } from '../../utils/interfaces';

interface ISlice {
  user: IUser | null;
  isAuthChecked: boolean;
}

const initialState: ISlice = {
  user: null,
  isAuthChecked: false,
};

export const userSlice = createSlice({
  name: 'currentOrder',
  initialState,
  reducers: {
    setAuthChecked: (state, action) => {
      state.isAuthChecked = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      console.log('registerUser');
      state.user = action.payload;
      state.isAuthChecked = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      console.log('loginUser');
      state.user = action.payload;
      state.isAuthChecked = true;
    });
    builder.addCase(logoutUser.fulfilled, (state) => {
      console.log('logout');
      state.user = null;
    });
    builder.addCase(updateUserToken.fulfilled, (state, action) => {
      console.log('updateUserToken');
      state.user = action.payload;
    });
    builder.addCase(checkUserAuth.fulfilled, (state) => {
      console.log('checkUserAuth.OK');
      state.isAuthChecked = true;
    });
    builder.addCase(checkUserAuth.rejected, (state) => {
      console.log('checkUserAuth.ERROR');
      state.isAuthChecked = true;
      state.user = null;
    });
  },
});

export const { setAuthChecked, setUser } = userSlice.actions;

export default userSlice.reducer;
