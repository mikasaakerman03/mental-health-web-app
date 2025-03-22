import React from "react";
import { useTranslation } from "react-i18next";

import hospitalImg from "../../shared/assets/images/mental_health.jpg";
import logo from "../../shared/assets/images/logo.png";

export const SignUpPage = () => {
  const { t } = useTranslation();

  return (
    <div className="m-3">
      <div className="w-full h-[calc(100vh-140px)] flex items-center justify-center">
        <div className="flex w-full h-full bg-white rounded-3xl overflow-hidden">
          {/* Left Side (Form) */}
          <div className="w-1/2 px-12 py-10 my-auto flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-[#4F3422] rounded-full flex items-center justify-center mb-5">
                <img src={logo} alt="Logo" className="w-4 h-4" />
              </div>
              <h2 className="text-2xl font-bold text-[#4F3422] mb-2">{t("signup.title")}</h2>
              <p className="text-gray-500 mb-6">{t("signup.subtitle")}</p>

              {/* Email */}
              <label className="text-sm text-gray-700 mb-1 block">{t("signup.email")}</label>
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
              <label className="text-sm text-gray-700 mb-1 block">{t("signup.password")}</label>
              <div className="flex items-center border rounded-full px-3 mb-4">
                <span className="text-gray-400">🔒</span>
                <input
                  type="password"
                  className="flex-1 px-2 py-2 rounded-full focus:outline-none"
                  placeholder="********"
                  autoComplete="new-password"
                />
              </div>

              {/* Confirm Password */}
              <label className="text-sm text-gray-700 mb-1 block">{t("signup.confirmPassword")}</label>
              <div className="flex items-center border rounded-full px-3 mb-6">
                <span className="text-gray-400">🔒</span>
                <input
                  type="password"
                  className="flex-1 px-2 py-2 rounded-full focus:outline-none"
                  placeholder="********"
                  autoComplete="new-password"
                />
              </div>

              <button className="w-full bg-[#9BB167] hover:opacity-90 text-white py-3 rounded-full font-semibold text-lg mb-6">
                {t("signup.button")} →
              </button>

              <p className="text-center text-sm">
                {t("signup.hasAccount")}{" "}
                <span className="text-[#9BB167] cursor-pointer hover:underline">
                  {t("signup.signin")}
                </span>
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-1/2 h-full relative">
            <img src={hospitalImg} alt="Hospital" className="w-full h-full object-cover" />
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
