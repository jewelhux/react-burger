import { createReducer } from '@reduxjs/toolkit';
import { WebsocketStatus } from '../../../utils/type';
import { ISocketOrder } from '../../../utils/interfaces';
import {
  wsConnectFeed,
  wsCloseFeed,
  wsConnectingFeed,
  wsErrorFeed,
  wsMessageFeed,
  wsOpenFeed,
} from '../../actions/socketFeedActions';

export type FeedOrdersStore = {
  status: WebsocketStatus;
  connectionError: string;
  orderList: ISocketOrder[];
};

const initialState: FeedOrdersStore = {
  status: WebsocketStatus.OFFLINE,
  connectionError: '',
  orderList: [],
};

export const socketFeedReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(wsConnectFeed, (state) => {
      state.status = WebsocketStatus.CONNECTING;
    })
    .addCase(wsConnectingFeed, (state) => {
      state.status = WebsocketStatus.CONNECTING;
    })
    .addCase(wsOpenFeed, (state) => {
      state.status = WebsocketStatus.ONLINE;
      state.connectionError = '';
    })
    .addCase(wsCloseFeed, (state) => {
      state.status = WebsocketStatus.OFFLINE;
    })
    .addCase(wsErrorFeed, (state, action) => {
      state.connectionError = action.payload;
    })
    .addCase(wsMessageFeed, (state, action) => {
      state.orderList = action.payload;
    });
});
