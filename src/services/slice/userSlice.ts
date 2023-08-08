import { createSlice } from '@reduxjs/toolkit';
import { checkUserAuth, editUser, getUser, loginUser, logoutUser, registerUser } from '../actions';
import { IUser } from '../../utils/interfaces';

interface ISlice {
  user: IUser | null;
  isAuthChecked: boolean;
}

export const initialState: ISlice = {
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
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(editUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(getUser.rejected, (state) => {
      state.user = null;
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
    });
    builder.addCase(checkUserAuth.fulfilled, (state) => {
      state.isAuthChecked = true;
    });
    builder.addCase(checkUserAuth.rejected, (state) => {
      state.isAuthChecked = true;
    });
  },
});

export const { setAuthChecked, setUser } = userSlice.actions;

export default userSlice.reducer;
