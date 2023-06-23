import { createSlice } from '@reduxjs/toolkit';
import { loginUser, logoutUser, registerUser, updateUserToken } from '../actions/actions';
import { IUser } from '../../utils/interfaces';

interface ISlice {
  user: IUser | null;
  isAuthChecked: boolean;
}

const initialState: ISlice = {
  user: null,
  isAuthChecked: false,
};

export const registerUserSlice = createSlice({
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
      state.user = action.payload;
      state.isAuthChecked = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isAuthChecked = true;
    });
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.user = null;
    });
    builder.addCase(updateUserToken.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export const {} = registerUserSlice.actions;

export default registerUserSlice.reducer;
