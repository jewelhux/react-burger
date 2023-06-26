import { Route, Routes } from 'react-router';
import MainPage from '../../pages/MainPage/MainPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import MainLayout from '../../Layout/MainLayout';
import RegisterPage from '../../pages/RegisterPage/RegisterPage';
import ProfilePage from '../../pages/ProfilePage/ProfilePage';
import ResetPassPage from '../../pages/ResetPassPage/ResetPassPage';
import ForgotPassPage from '../../pages/ForgotPassPage/ForgotPassPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import { OnlyAuth, OnlyUnAuth } from '../ProtectedRouteElement';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index path="/" element={<MainPage />} />
        <Route path="/login" element={<OnlyUnAuth component={<LoginPage />} />} />
        <Route path="/register" element={<OnlyUnAuth component={<RegisterPage />} />} />
        <Route path="/forgot-password" element={<OnlyUnAuth component={<ForgotPassPage />} />} />
        <Route path="/reset-password" element={<OnlyUnAuth component={<ResetPassPage />} />} />
        <Route path="/profile" element={<OnlyAuth component={<ProfilePage />} />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
