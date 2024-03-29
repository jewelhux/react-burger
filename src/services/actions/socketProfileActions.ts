import { createAction } from '@reduxjs/toolkit';
import { ISocketAnswer } from '../../utils/interfaces';

export const wsConnectProfile = createAction<string, 'PROFILE_CONNECT'>('PROFILE_CONNECT');
export const wsDisconnectProfile = createAction('PROFILE_DISCONNECT');
export const wsConnectingProfile = createAction('PROFILE_WS_CONNECTING');
export const wsOpenProfile = createAction('PROFILE_WS_OPEN');
export const wsCloseProfile = createAction('PROFILE_WS_CLOSE');
export const wsMessageProfile = createAction<ISocketAnswer, 'PROFILE_WS_MESSAGE'>(
  'PROFILE_WS_MESSAGE'
);
export const wsErrorProfile = createAction<string, 'PROFILE_WS_ERROR'>('PROFILE_WS_ERROR');

export type socketFeedActions =
  | ReturnType<typeof wsConnectProfile>
  | ReturnType<typeof wsDisconnectProfile>
  | ReturnType<typeof wsConnectingProfile>
  | ReturnType<typeof wsOpenProfile>
  | ReturnType<typeof wsCloseProfile>
  | ReturnType<typeof wsMessageProfile>
  | ReturnType<typeof wsErrorProfile>;
