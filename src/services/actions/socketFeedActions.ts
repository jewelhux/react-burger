import { createAction } from '@reduxjs/toolkit';
import { ISocketOrder } from '../../utils/interfaces';

export const connectFeed = createAction<string, 'FEED_CONNECT'>('FEED_CONNECT');
export const disconnectFeed = createAction('FEED_DISCONNECT');
export const wsConnectingFeed = createAction('FEED_WS_CONNECTING');
export const wsOpenFeed = createAction('FEED_WS_OPEN');
export const wsCloseFeed = createAction('FEED_WS_CLOSE');
export const wsMessageFeed = createAction<ISocketOrder[], 'FEED_WS_MESSAGE'>('FEED_WS_MESSAGE');
export const wsErrorFeed = createAction<string, 'FEED_WS_ERROR'>('FEED_WS_ERROR');

export type socketFeedActions =
  | ReturnType<typeof connectFeed>
  | ReturnType<typeof disconnectFeed>
  | ReturnType<typeof wsConnectingFeed>
  | ReturnType<typeof wsOpenFeed>
  | ReturnType<typeof wsCloseFeed>
  | ReturnType<typeof wsMessageFeed>
  | ReturnType<typeof wsErrorFeed>;
