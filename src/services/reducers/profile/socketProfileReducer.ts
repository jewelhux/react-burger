import { createReducer } from '@reduxjs/toolkit';
import {
  wsConnectingProfile,
  wsOpenProfile,
  wsCloseProfile,
  wsErrorProfile,
} from '../../actions/socketProfileActions';

export type socketProfileStore = {
  connectionError: string;
};

const initialState: socketProfileStore = {
  connectionError: '',
};

export const socketProfileReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(wsConnectingProfile, () => {
      // state.status = WebsocketStatus.CONNECTING;
      console.log('wsConnectingProfile');
    })
    .addCase(wsOpenProfile, (state) => {
      // state.status = WebsocketStatus.ONLINE;
      state.connectionError = '';
      console.log('wsOpenProfile');
    })
    .addCase(wsCloseProfile, () => {
      console.log('wsCloseProfile');
      // state.status = WebsocketStatus.OFFLINE;
    })
    .addCase(wsErrorProfile, (state, action) => {
      console.log('wsErrorProfile');
      state.connectionError = action.payload;
    });
});
