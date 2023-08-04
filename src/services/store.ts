import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { WS_FEED_ACTIONS, WS_PROFILE_ACTIONS } from '../utils/const';
import { socketMiddleware } from './middleware/socketMiddleware';
import comboReducer from './reducers';

const feedMiddleware = socketMiddleware(WS_FEED_ACTIONS);
const profileMiddleware = socketMiddleware(WS_PROFILE_ACTIONS);

export const store = configureStore({
  reducer: comboReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([feedMiddleware, profileMiddleware]);
  },
});

export type RootState = ReturnType<typeof comboReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
