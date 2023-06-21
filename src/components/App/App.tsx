import { Route, Routes } from 'react-router';
import MainPage from '../../pages/MainPage/MainPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import MainLayout from '../../Layout/MainLayout';
import RegisterPage from '../../pages/RegisterPage/RegisterPage';
import ProfilePage from '../../pages/ProfilePage/ProfilePage';
import ResetPassPage from '../../pages/ResetPassPage/ResetPassPage';
import ForgotPassPage from '../../pages/ForgotPassPage/ForgotPassPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPassPage />} />
        <Route path="/reset-password" element={<ResetPassPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
