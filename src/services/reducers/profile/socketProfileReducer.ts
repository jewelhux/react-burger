import { createReducer } from '@reduxjs/toolkit';
import { WebsocketStatus } from '../../../utils/type';
import { ISocketOrder } from '../../../utils/interfaces';
import {
  wsConnectProfile,
  wsCloseProfile,
  wsConnectingProfile,
  wsErrorProfile,
  wsMessageProfile,
  wsOpenProfile,
} from '../../actions/socketProfileActions';

export type ProfileOrdersStore = {
  status: WebsocketStatus;
  connectionError: string;
  orderList: ISocketOrder[];
  total: number;
  totalToday: number;
};

const initialState: ProfileOrdersStore = {
  status: WebsocketStatus.OFFLINE,
  connectionError: '',
  orderList: [],
  total: 0,
  totalToday: 0,
};

export const socketProfileReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(wsConnectProfile, (state) => {
      state.status = WebsocketStatus.CONNECTING;
    })
    .addCase(wsConnectingProfile, (state) => {
      state.status = WebsocketStatus.CONNECTING;
    })
    .addCase(wsOpenProfile, (state) => {
      state.status = WebsocketStatus.ONLINE;
      state.connectionError = '';
    })
    .addCase(wsCloseProfile, (state) => {
      state.status = WebsocketStatus.OFFLINE;
    })
    .addCase(wsErrorProfile, (state, action) => {
      state.connectionError = action.payload;
    })
    .addCase(wsMessageProfile, (state, action) => {
      const { orders, total, totalToday } = action.payload;
      state.orderList = orders;
      state.total = total;
      state.totalToday = totalToday;
    });
});
