import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import logo from "../../shared/assets/images/logo.png";
import spiralImage from "../../shared/assets/images/spiral_404.avif";

export const NotFoundPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="relative z-10 m-3 w-full h-[calc(100vh-140px)] rounded-3xl bg-white flex items-center justify-between">
      {/* Left */}
      <div className=" relative z-10 flex flex-col justify-center px-[180px] w-1/2 h-full">
        <img src={logo} alt="logo" className="w-10 h-10 mb-6" />

        <h1 className="text-[120px] font-extrabold text-[#4F3422] leading-none">404</h1>

        <p className="text-gray-500 text-xl max-w-[500px] mt-4 mb-8">
          {t("notFound.description")}
        </p>

        <button
          onClick={() => navigate("/guest/main")}
          className="bg-[#9BB167] text-white px-6 py-3 rounded-full text-md font-semibold hover:opacity-90 transition flex items-center gap-2 w-max"
        >
          {t("notFound.button")}
          <span>🏠</span>
        </button>
      </div>

      {/* Right */}
      <div className="w-1/2 h-full">
        <img
          src={spiralImage}
          alt="404 spiral"
          className="absolute -top-[20%] -right-[25%] w-[1500px] h-[1500px]z-0"
        />
      </div>
    </div>
  );
};
