import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';

import api from "../../shared/helpers/axiosConfig";
import aiImg from "../../shared/assets/images/ai_women.png";
import logo from '../../shared/assets/images/logo.png';

export const SignInMobile = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleSignIn = async () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('refreshToken');

    try {
      const { data } = await api.post('/auth/signin', {
        email,
        password,
      });

      localStorage.setItem('authToken', data.access_token);
      localStorage.setItem('refreshToken', data.refresh_token);

      navigate('/dashboard')
    } catch (err) {
      console.log('Sign-in error:', err.response?.status, err.response?.data);
    }

  };

  return (
    <div className="m-3">
      <div className="w-full h-full flex items-center justify-center ">
        <div className="flex flex-col-reverse w-full h-full bg-white rounded-3xl overflow-hidden">
          {/* Left Side (Form) */}
          <div className="w-full px-12 py-10 my-auto flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 mx-auto bg-[#4F3422] rounded-full flex items-center justify-center mb-5">
                <img
                  src={logo}
                  alt="AI"
                  className="w-4 h-4"
                />
              </div>
              <h2 className="text-2xl text-center font-bold text-[#4F3422] mb-2">{t("signin.title")}</h2>
              <p className="text-gray-500 text-center mb-6">{t("signin.subtitle")}</p>

              {/* Email Input */}
              <label className="text-sm text-gray-700 mb-1 block">{t("signin.email")}</label>
              <div className="flex items-center border rounded-full px-3 mb-4">
                <span className="text-gray-400">@</span>
                <input
                  type="email"
                  className="flex-1 px-2 py-2 rounded-full focus:outline-none"
                  placeholder="you@example.com"
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Password */}
              <label className="text-sm text-gray-700 mb-1 block">{t("signin.password")}</label>
              <div className="flex items-center border rounded-full px-3 mb-3">
                <span className="text-gray-400">🔒</span>
                <input
                  type="password"
                  className="flex-1 px-2 py-2 rounded-full focus:outline-none"
                  placeholder="********"
                  autoComplete="new-password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="flex flex-col justify-start gap-y-2 text-sm text-gray-500 mb-4">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-green-600" />
                  {t("signin.remember")}
                </label>
                <button className="text-[#9BB167] self-start hover:underline">{t("signin.forgot")}</button>
              </div>

              <button className="w-full bg-[#9BB167] hover:opacity-90 text-white py-3 rounded-full font-semibold text-lg mb-6"
                onClick={handleSignIn}>
                {t("signin.button")} →
              </button>

              <p className="text-center text-sm">
                {t("signin.noAccount")} <span aria-hidden className="text-[#9BB167] cursor-pointer hover:underline" onClick={() => { navigate('/guest/sign-up') }}>{t("signin.signup")}</span>
              </p>
            </div>
          </div>

          {/* Right Side (Image Full Height) */}
          <div className="w-full h-full relative">
            <img
              src={aiImg}
              alt="AI"
              className="w-full h-full rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
