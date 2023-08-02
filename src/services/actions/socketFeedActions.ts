/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAction } from '@reduxjs/toolkit';
import { ISocketAnswer } from '../../utils/interfaces';

export const wsConnectFeed = createAction<string, 'FEED_CONNECT'>('FEED_CONNECT');
export const wsDisconnectFeed = createAction('FEED_DISCONNECT');
export const wsConnectingFeed = createAction('FEED_WS_CONNECTING');
export const wsOpenFeed = createAction('FEED_WS_OPEN');
export const wsCloseFeed = createAction('FEED_WS_CLOSE');
export const wsMessageFeed = createAction<ISocketAnswer, 'FEED_WS_MESSAGE'>('FEED_WS_MESSAGE');
export const wsErrorFeed = createAction<string, 'FEED_WS_ERROR'>('FEED_WS_ERROR');

export type socketFeedActions =
  | ReturnType<typeof wsConnectFeed>
  | ReturnType<typeof wsDisconnectFeed>
  | ReturnType<typeof wsConnectingFeed>
  | ReturnType<typeof wsOpenFeed>
  | ReturnType<typeof wsCloseFeed>
  | ReturnType<typeof wsMessageFeed>
  | ReturnType<typeof wsErrorFeed>;
