import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

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
    </Routes>

  )
}
