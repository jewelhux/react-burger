import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { WS_FEED_ACTHIONS } from '../utils/const';
import { socketMiddleware } from './middleware/socketMiddleware';
import comboReducer from './reducers';

const feedMiddleware = socketMiddleware(WS_FEED_ACTHIONS);
const profileMiddleware = socketMiddleware(WS_FEED_ACTHIONS); // ТУТ БУДУТ СВОИ ЭКШЕНЫ ПОКА ВРЕММЕННЫЙ ДУБЛЬ

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
