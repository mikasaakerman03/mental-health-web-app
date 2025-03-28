import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { UserLayout } from '../features/UserLayout/UserLayout';
import { DashboardPage } from '../pages/DashboardPage/DashboardPage';
import { NotFoundPage } from '../widgets/NotFoundPage/NotFoundPage';
import { ChatbotPage } from '../pages/ChatbotPage/ChatbotPage';
import { ProfilePage } from '../pages/Profile/ProfilePage';
import { SettingsPage } from '../pages/Profile/SettingsPage';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('authToken');

  if (!isAuthenticated) {
    return <Navigate to="/guest/sign-in" />;
  }

  return <div>{children}</div>;
};

export const UserRoutes = () => {
  return (
    <ProtectedRoute>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="chatbot" element={<ChatbotPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="profile/settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </ProtectedRoute>
  )
}
