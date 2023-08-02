import React, { useEffect } from 'react';
import OrderList from '../../components/OrderList/OrderList';
import { wsCloseProfile, wsConnectProfile } from '../../services/actions/socketProfileActions';
import { useAppDispatch, useAppSelector } from '../../services/store';
import { WS_USER_ORDERS_URL } from '../../utils/const';

const ProfileOrdersPage = () => {
  const allProfileOrders = useAppSelector((state) => state.profileOrders.orderList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem('accessToken')?.split(' ')[1] ?? '';
    dispatch(wsConnectProfile(`${WS_USER_ORDERS_URL}?token=${token}`));
    return () => {
      dispatch(wsCloseProfile());
    };
  }, [dispatch]);

  return <OrderList orderList={allProfileOrders} />;
};

export default ProfileOrdersPage;
