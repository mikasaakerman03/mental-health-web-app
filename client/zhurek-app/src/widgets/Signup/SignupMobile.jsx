import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';

import api from "../../shared/helpers/axiosConfig";
import hospitalImg from "../../shared/assets/images/mental_health.jpg";
import logo from "../../shared/assets/images/logo.png";

export const SignupMobile = () => {
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
      <div className="w-full h-full">
        <div className="flex flex-col-reverse w-full h-full bg-white rounded-3xl overflow-hidden">
          {/* Left Side (Form) */}
          <div className="w-full px-12 py-10 my-auto flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 mx-auto bg-[#4F3422] rounded-full flex items-center justify-center mb-5">
                <img src={logo} alt="Logo" className="w-4 h-4 " />
              </div>
              <h2 className="text-2xl text-center font-bold text-[#4F3422] mb-2">{t("signup.title")}</h2>
              <p className="text-gray-500 text-center mb-6">{t("signup.subtitle")}</p>

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
          <div className="w-full h-1/3 relative">
            <img src={hospitalImg} alt="Hospital" className="w-full h-full rounded-2xl" />
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

            <div className="mb-6 text-center">
              <a
                href="/files/zhurek_terms_and_policy_long.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#F7F4F2] text-[#4F3422] px-6 py-2 rounded-full font-semibold text-sm border border-[#4F3422] hover:bg-[#4F3422] hover:text-white transition-all"
              >
                📄 {t("signup.openPdf") || "Открыть PDF с условиями"}
              </a>
            </div>

            <label className="flex items-center gap-2 mb-4 text-sm text-gray-700">
              <input
                type="checkbox"
                checked={agreeChecked}
                onChange={(e) => setAgreeChecked(e.target.checked)}
                className="accent-green-600"
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
