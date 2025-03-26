import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';

import api from "../../shared/helpers/axiosConfig";
import hospitalImg from "../../shared/assets/images/mental_health.jpg";
import logo from "../../shared/assets/images/logo.png";
import document from "../../shared/assets/files/zhurek_terms_and_policy_long.pdf";

export const SignUpDesktop = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [confirm, setConfirm] = useState(false);
  const [agreeChecked, setAgreeChecked] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, setConfirmPassword] = useState("");

  const handleSubmit = () => {
    setConfirm(true);
  };

  const handleAgree = async () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('refreshToken');

    try {
      const deviceToken = 'mock-device-token';
      const role = 'USER';

      const { data } = await api.post("/auth/signup", {
        name,
        email,
        password,
        deviceToken,
        role,
      });

      console.log("Signed up successfully:", data);
      setConfirm(false);
      navigate("/guest/sign-in");
    } catch (error) {
      console.error("Sign up failed:", error);
      alert(t("signup.error"));
    }
  };

  const handleCancel = () => {
    setConfirm(false);
    setAgreeChecked(false);
  };

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

              <label className="text-sm text-gray-700 mb-1 block">{t("signup.fio")}</label>
              <div className="flex items-center border rounded-full px-3 mb-4">
                <input
                  type="text"
                  className="flex-1 px-2 py-2 rounded-full focus:outline-none"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              {/* Email */}

              <label className="text-sm text-gray-700 mb-1 block">{t("signup.email")}</label>
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
              <label className="text-sm text-gray-700 mb-1 block">{t("signup.password")}</label>
              <div className="flex items-center border rounded-full px-3 mb-4">
                <span className="text-gray-400">🔒</span>
                <input
                  type="password"
                  className="flex-1 px-2 py-2 rounded-full focus:outline-none"
                  placeholder="********"
                  autoComplete="new-password"
                  onChange={(e) => setPassword(e.target.value)}
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
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              <button
                className="w-full bg-[#9BB167] hover:opacity-90 text-white py-3 rounded-full font-semibold text-lg mb-6"
                onClick={handleSubmit}
              >
                {t("signup.button")} →
              </button>

              <p className="text-center text-sm">
                {t("signup.hasAccount")}{" "}
                <span
                  aria-hidden
                  className="text-[#9BB167] cursor-pointer hover:underline"
                  onClick={() => navigate("/guest/sign-in")}
                >
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

      {/* Modal */}
      {confirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-[95%] max-w-4xl max-h-[90vh] overflow-hidden shadow-lg flex flex-col">
            <h3 className="text-lg text-center mt-2 font-semibold text-[#4F3422] mb-4">
              {t("signup.termsTitle")}
            </h3>

            <div className="flex-1 mb-4 overflow-y-auto border rounded">
              <iframe
                title="terms"
                src={`${document}#toolbar=0`}
                className="w-full h-[500px]"
                style={{ border: 'none' }}
              ></iframe>
            </div>

            <label className="flex items-center gap-2 mb-4 text-sm text-gray-700">
              <input
                type="checkbox"
                checked={agreeChecked}
                onChange={(e) => setAgreeChecked(e.target.checked)}
              />
              {t("signup.termsText")}
            </label>

            <div className="flex justify-end gap-4">
              <button
                className="px-4 py-2 rounded-full border text-[#4F3422] hover:bg-gray-100 transition"
                onClick={handleCancel}
              >
                {t("signup.cancel")}
              </button>
              <button
                className={`px-4 py-2 bg-[#9BB167] text-white rounded-full transition ${!agreeChecked ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"
                  }`}
                onClick={handleAgree}
                disabled={!agreeChecked}
              >
                {t("signup.agree")}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
