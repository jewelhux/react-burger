import { createAction } from '@reduxjs/toolkit';

export const connectProfile = createAction<string, 'PROFILE_CONNECT'>('PROFILE_CONNECT');
export const disconnectProfile = createAction('PROFILE_DISCONNECT');
export const wsConnectingProfile = createAction('PROFILE_WS_CONNECTING');
export const wsOpenProfile = createAction('PROFILE_WS_OPEN');
export const wsCloseProfile = createAction('PROFILE_WS_CLOSE');
export const wsMessageProfile = createAction<string, 'PROFILE_WS_MESSAGE'>('PROFILE_WS_MESSAGE');
export const wsErrorProfile = createAction<string, 'PROFILE_WS_ERROR'>('PROFILE_WS_ERROR');

export type socketFeedActions =
  | ReturnType<typeof connectProfile>
  | ReturnType<typeof disconnectProfile>
  | ReturnType<typeof wsConnectingProfile>
  | ReturnType<typeof wsOpenProfile>
  | ReturnType<typeof wsCloseProfile>
  | ReturnType<typeof wsMessageProfile>
  | ReturnType<typeof wsErrorProfile>;
