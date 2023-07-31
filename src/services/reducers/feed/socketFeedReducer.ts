import { createReducer } from '@reduxjs/toolkit';
import {
  wsConnectingFeed,
  wsOpenFeed,
  wsCloseFeed,
  wsErrorFeed,
} from '../../actions/socketFeedActions';

export type socketFeedStore = {
  connectionError: string;
};

const initialState: socketFeedStore = {
  connectionError: '',
};

export const socketFeedReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(wsConnectingFeed, () => {
      // state.status = WebsocketStatus.CONNECTING;
      console.log('wsConnectingFeed');
    })
    .addCase(wsOpenFeed, (state) => {
      // state.status = WebsocketStatus.ONLINE;
      state.connectionError = '';
      console.log('wsOpenFeed');
    })
    .addCase(wsCloseFeed, () => {
      console.log('wsCloseFeed');
      // state.status = WebsocketStatus.OFFLINE;
    })
    .addCase(wsErrorFeed, (state, action) => {
      console.log('wsErrorFeed');
      state.connectionError = action.payload;
    });
});
