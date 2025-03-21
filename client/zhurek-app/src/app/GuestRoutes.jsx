import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LandingPage } from '../pages/LandingPage/LandingPage';
import { GuestLayout } from '../features/GuestLayout/GuestLayout';

export const GuestRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/signin" element={<SignInPage />} />
      <Route path="/forgetpassword" element={<ForgetPasswordPage />} />
      <Route
        path="/signup/*"
        element={
          <FormDataProvider>
            <Routes>
              <Route path="/" element={<SignUpPage />} />
              <Route path="/eds" element={<EdsAuthPage />} />
              <Route path="/password" element={<CreatingPassword />} />
              <Route path="/phone-number" element={<PhoneNumberPage />} />
              <Route path="/verify" element={<ValidateOtpCodePage />} />
            </Routes>
          </FormDataProvider>
        }
      /> */}
      <Route path="/" element={<GuestLayout />}>
        <Route path="main" element={<LandingPage />} />
      </Route>
    </Routes>
  )
}
