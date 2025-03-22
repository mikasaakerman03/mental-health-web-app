import React from 'react';
import { useTranslation } from 'react-i18next';

import arrowRightIcon from "../../assets/icons/arrowright_white.png";
import ytIcon from "../../assets/icons/yt_white.png";
import twIcon from '../../assets/icons/tw_white.png';
import fbIcon from "../../assets/icons/fb_white.png";
import igIcon from "../../assets/icons/ig_white.png";
import bagIcon2 from "../../assets/icons/bag_white.png";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="relative text-white rounded-t-3xl overflow-hidden">
      {/* Background: SVG pattern + gradient */}
      <div className="absolute inset-0 z-0">
        <svg
          width="100%"
          height="100%"
          className="absolute inset-0"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Паттерн с большими кругами */}
            <pattern
              id="dotPattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="50" cy="50" r="30" fill="white" fillOpacity="0.05" />
            </pattern>

            {/* Цветной центр */}
            <radialGradient id="footerGradient" cx="50%" cy="50%" r="70%">
              <stop offset="0%" stopColor="#4F3422" />
              <stop offset="70%" stopColor="#3B271A" />
              <stop offset="100%" stopColor="#3B271A" />
            </radialGradient>
          </defs>

          {/* Цветная заливка по центру */}
          <rect width="100%" height="100%" fill="url(#footerGradient)" />
          {/* Поверх паттерн */}
          <rect width="100%" height="100%" fill="url(#dotPattern)" />
        </svg>

      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center py-16 px-8">
        {/* Logo */}
        <h1 className="text-3xl font-bold mb-8">zhurek</h1>

        {/* Newsletter */}
        <div className="flex items-center bg-[#3B271A] px-6 py-3 rounded-full w-[400px] max-w-full mb-8">
          <img src={bagIcon2} alt="arrow" className="w-4 h-4 mr-3" />
          <input
            type="text"
            placeholder={t('footer.subscribe')}
            className="bg-transparent outline-none text-sm text-white w-full placeholder-white"
          />
          <img src={arrowRightIcon} alt="arrow" className="w-5 h-5 ml-2" />
        </div>

        {/* Nav Links */}
        <nav className="flex flex-wrap justify-center gap-8 text-[#C6B1A2] font-medium text-lg mb-10">
          <a href="#" className="hover:text-white">{t('menu.home')}</a>
          <a href="#" className="hover:text-white">{t('menu.platform')}</a>
          <a href="#" className="hover:text-white">{t('menu.assessment')}</a>
          <a href="#" className="hover:text-white">{t('menu.aboutUs')}</a>
          <a href="#" className="hover:text-white">{t('menu.contactUs')}</a>
          <a href="#" className="hover:text-white">{t('menu.blog')}</a>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-6 mb-8">
          <a href="https://www.facebook.com/satbayev.university/" target="_blank" rel="noopener noreferrer">
            <img src={fbIcon} alt="facebook" className="hover:opacity-80 transition" />
          </a>
          <a href="https://www.youtube.com/@satbayevuniversity" target="_blank" rel="noopener noreferrer">
            <img src={ytIcon} alt="youtube" className="hover:opacity-80 transition" />
          </a>
          <a href="https://www.instagram.com/satbayev.university/" target="_blank" rel="noopener noreferrer">
            <img src={igIcon} alt="instagram" className="hover:opacity-80 transition" />
          </a>
          <a href="https://twitter.com/satbayev_univer" target="_blank" rel="noopener noreferrer">
            <img src={twIcon} alt="twitter" className="hover:opacity-80 transition" />
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="text-[#C6B1A2] text-xs text-center">
          <p>COPYRIGHT 2025. ALL RIGHTS RESERVED</p>
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <a href="#" className="hover:underline">{t('footer.terms')}</a>
            <a href="#" className="hover:underline">{t('footer.privacy')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
