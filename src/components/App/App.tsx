import { Route, Routes } from 'react-router';
import MainPage from '../../pages/MainPage/MainPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import MainLayout from '../../Layout/Mainlayout/MainLayout';
import RegisterPage from '../../pages/RegisterPage/RegisterPage';
import ProfilePage from '../../pages/ProfilePage/ProfilePage';
import ResetPassPage from '../../pages/ResetPassPage/ResetPassPage';
import ForgotPassPage from '../../pages/ForgotPassPage/ForgotPassPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import { OnlyAuth, OnlyUnAuth } from '../ProtectedRouteElement';
import { useEffect } from 'react';
import { useAppDispatch } from '../../services/store';
import { checkUserAuth, fetchIngredients } from '../../services/actions';
import ProfileLayout from '../../Layout/ProfileLayout/ProfileLayout';
import { useLocation, useNavigate } from 'react-router-dom';
import Modal from '../Modal/Modal';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import FeedLayout from '../../Layout/FeedLayout/FeedLayout';
import FeedPage from '../../pages/FeedPage/FeedPage';
import { wsConnectingFeed } from '../../services/actions/socketFeedActions';
import OrderDetailsPage from '../../pages/OrderDetailsPage/OrderDetailsPage';
import ProfileOrdersPage from '../../pages/OrderPage/ProfileOrdersPage';

function App() {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const backgroundIngredients = location.state && location.state.backgroundIngredients;
  const backgroundProfileOrders = location.state && location.state.backgroundProfileOrders;
  const backgroundFeedOrders = location.state && location.state.backgroundFeedOrders;

  const handleModalClose = () => {
    navigate(-1);
  };

  useEffect(() => {
    dispatch(checkUserAuth());
    dispatch(fetchIngredients());
    dispatch(wsConnectingFeed());
  }, [dispatch]);

  return (
    <>
      <Routes
        location={
          backgroundIngredients || backgroundProfileOrders || backgroundFeedOrders || location
        }
      >
        <Route path="/" element={<MainLayout />}>
          <Route index element={<MainPage />} />
          <Route path="/login" element={<OnlyUnAuth component={<LoginPage />} />} />
          <Route path="/register" element={<OnlyUnAuth component={<RegisterPage />} />} />
          <Route path="/forgot-password" element={<OnlyUnAuth component={<ForgotPassPage />} />} />
          <Route path="/reset-password" element={<OnlyUnAuth component={<ResetPassPage />} />} />
          <Route path="/ingredients/:ingredientId" element={<IngredientDetails />} />
          <Route path="/profile" element={<OnlyAuth component={<ProfileLayout />} />}>
            <Route index element={<OnlyAuth component={<ProfilePage />} />} />
            <Route path="orders" element={<OnlyAuth component={<ProfileOrdersPage />} />} />
          </Route>
          <Route
            path="/profile/orders/:ordersId"
            element={<OnlyAuth component={<OrderDetailsPage />} />}
          />
          <Route path="/feed" element={<FeedLayout />}>
            <Route index element={<FeedPage />} />
            <Route path="/feed/:feedId" element={<OrderDetailsPage />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {backgroundIngredients && (
        <Routes>
          <Route
            path="/ingredients/:ingredientId"
            element={
              <Modal onClose={handleModalClose} title={'Просмотр ингредиента'}>
                <IngredientDetails />
              </Modal>
            }
          />
        </Routes>
      )}

      {backgroundProfileOrders && (
        <Routes>
          <Route
            path="/profile/orders/:ordersId"
            element={
              <Modal onClose={handleModalClose} title={'backgroundProfileOrders'}>
                <OrderDetailsPage />
              </Modal>
            }
          />
        </Routes>
      )}

      {backgroundFeedOrders && (
        <Routes>
          <Route
            path="/feed/:feedId"
            element={
              <Modal onClose={handleModalClose} title={'backgroundFeedOrders'}>
                <OrderDetailsPage />
              </Modal>
            }
          />
        </Routes>
      )}
    </>
  );
}

export default App;
