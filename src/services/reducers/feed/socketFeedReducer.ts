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
  total: number;
  totalToday: number;
};

const initialState: FeedOrdersStore = {
  status: WebsocketStatus.OFFLINE,
  connectionError: '',
  orderList: [],
  total: 0,
  totalToday: 0,
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
      const { orders, total, totalToday } = action.payload;
      if (action.payload.orders.length) {
        state.orderList = orders;
        state.total = total;
        state.totalToday = totalToday;
      }
    });
});
