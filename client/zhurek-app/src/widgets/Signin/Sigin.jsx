import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';

import aiImg from "../../shared/assets/images/ai_women.png";
import logo from '../../shared/assets/images/logo.png';

export const SignInPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="m-3">
      <div className="w-full h-[calc(100vh-140px)] flex items-center justify-center ">
        <div className="flex w-full h-full bg-white rounded-3xl overflow-hidden">
          {/* Left Side (Form) */}
          <div className="w-1/2 px-12 py-10 my-auto flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-[#4F3422] rounded-full flex items-center justify-center mb-5">
                <img
                  src={logo}
                  alt="AI"
                  className="w-4 h-4"
                />
              </div>
              <h2 className="text-2xl font-bold text-[#4F3422] mb-2">{t("signin.title")}</h2>
              <p className="text-gray-500 mb-6">{t("signin.subtitle")}</p>

              {/* Email Input */}
              <label className="text-sm text-gray-700 mb-1 block">{t("signin.email")}</label>
              <div className="flex items-center border rounded-full px-3 mb-4">
                <span className="text-gray-400">@</span>
                <input
                  type="email"
                  className="flex-1 px-2 py-2 rounded-full focus:outline-none"
                  placeholder="you@example.com"
                  autoComplete="off"
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
                />
              </div>

              <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-green-600" />
                  {t("signin.remember")}
                </label>
                <button className="text-[#9BB167] hover:underline">{t("signin.forgot")}</button>
              </div>

              <button className="w-full bg-[#9BB167] hover:opacity-90 text-white py-3 rounded-full font-semibold text-lg mb-6">
                {t("signin.button")} →
              </button>

              <p className="text-center text-sm">
                {t("signin.noAccount")} <span aria-hidden className="text-[#9BB167] cursor-pointer hover:underline" onClick={() => { navigate('/guest/sign-up') }}>{t("signin.signup")}</span>
              </p>
            </div>
          </div>

          {/* Right Side (Image Full Height) */}
          <div className="w-1/2 h-full relative">
            <img
              src={aiImg}
              alt="AI"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-[#4F3422] text-white text-sm p-4 rounded-2xl shadow-md">
              <p className="mb-4 italic">“{t('signin.testimonial.text')}”</p>
              <div className="text-yellow-400 text-lg mb-2">★★★★★</div>
              <p className="font-semibold">{t('signin.testimonial.name')}</p>
              <p className="text-xs">{t('signin.testimonial.role')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
