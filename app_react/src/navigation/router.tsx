import { Routes, Route } from 'react-router-dom';

import HomePage from '@/pages/Home.page';
import NotFoundPage from '@/pages/NotFound.page';
import LoginPage from '@/pages/Login.page';
import RegisterPage from '@/pages/Register.page';

const Router = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default Router;
