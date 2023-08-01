import React from 'react';
import OrderList from '../../components/OrderList/OrderList';
import { useAppSelector } from '../../services/store';

const ProfileOrdersPage = () => {
  const allFeedOrders = useAppSelector((state) => state.feedOrders.orderList);
  return <OrderList orderList={allFeedOrders} />;
};

export default ProfileOrdersPage;
