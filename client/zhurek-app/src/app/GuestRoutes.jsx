import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { GuestLayout } from '../features/GuestLayout/GuestLayout';
import { LandingPage } from '../pages/LandingPage/LandingPage';
import { SignInPage } from '../widgets/Signin/Sigin';
import { SignUpPage } from '../widgets/Signup/Signup';
import { NotFoundPage } from '../widgets/NotFoundPage/NotFoundPage';

export const GuestRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<GuestLayout />}>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="main" element={<LandingPage />} />
        <Route path="sign-in" element={<SignInPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
      </Route>
    </Routes>
  )
}
