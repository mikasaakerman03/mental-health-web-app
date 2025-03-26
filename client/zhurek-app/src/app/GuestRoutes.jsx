import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { GuestLayout } from '../features/GuestLayout/GuestLayout';
import { LandingPage } from '../pages/LandingPage/LandingPage';
import { SignupPage } from '../pages/SignupPage/SignupPage';
import { SigninPage } from '../pages/SigninPage/SiginPage';
import { NotFoundPage } from '../widgets/NotFoundPage/NotFoundPage';
import { ContactUsPage } from '../pages/ContactUs/ContactUsPage';
import { AboutUsPage } from '../pages/AboutUs/AboutUsPage';
import { AssesmentPage } from '../pages/AssesmentPage/AssesmentPage';

export const GuestRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<GuestLayout />}>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="main" element={<LandingPage />} />
        <Route path="sign-in" element={<SigninPage />} />
        <Route path="sign-up" element={<SignupPage />} />
        <Route path="contact-us" element={<ContactUsPage />} />
        <Route path="about-us" element={<AboutUsPage />} />
        <Route path="assesment" element={<AssesmentPage />} />
      </Route>
    </Routes>
  )
}
