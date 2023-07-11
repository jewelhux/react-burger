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
import { checkUserAuth, fetchIngredients } from '../../services/actions/actions';
import ProfileLayout from '../../Layout/ProfileLayout/ProfileLayout';
import { useLocation, useNavigate } from 'react-router-dom';
import Modal from '../Modal/Modal';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import FeedLayout from '../../Layout/FeedLayout/FeedLayout';
import FeedPage from '../../pages/FeedPage/FeedPage';
import FeedPageDetails from '../../pages/FeedPage/FeedPageDetails/FeedPageDetails';

function App() {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const background = location.state && location.state.background;

  const handleModalClose = () => {
    navigate(-1);
  };

  useEffect(() => {
    dispatch(checkUserAuth());
    dispatch(fetchIngredients());
  }, [dispatch]);

  return (
    <>
      <Routes location={background || location}>
        <Route path="/" element={<MainLayout />}>
          <Route index path="/" element={<MainPage />} />
          <Route path="/login" element={<OnlyUnAuth component={<LoginPage />} />} />
          <Route path="/register" element={<OnlyUnAuth component={<RegisterPage />} />} />
          <Route path="/forgot-password" element={<OnlyUnAuth component={<ForgotPassPage />} />} />
          <Route path="/reset-password" element={<OnlyUnAuth component={<ResetPassPage />} />} />
          <Route path="/ingredients/:ingredientId" element={<IngredientDetails />} />
          <Route path="/profile" element={<OnlyAuth component={<ProfileLayout />} />}>
            <Route index element={<OnlyAuth component={<ProfilePage />} />} />
            <Route path="orders" element={<OnlyAuth component={<ProfilePage />} />} />
          </Route>
          <Route path="/feed" element={<OnlyAuth component={<FeedLayout />} />}>
            <Route index element={<OnlyAuth component={<FeedPage />} />} />
            <Route path=":feedId" element={<OnlyAuth component={<FeedPageDetails />} />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {background && (
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
    </>
  );
}

export default App;
