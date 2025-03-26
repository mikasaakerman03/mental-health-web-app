import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from 'react-router-dom';
import clsx from 'clsx';

import menuIcon from '../../assets/icons/menu_brown.png';
import menuGrayIcon from '../../assets/icons/menu_gray.png';
import ytIcon from "../../assets/icons/yt_white.png";
import twIcon from '../../assets/icons/tw_white.png';
import fbIcon from "../../assets/icons/fb_white.png";
import igIcon from "../../assets/icons/ig_white.png";
import logo from '../../assets/images/logo.png';
import logobrown from '../../assets/images/logo_brown.png';

import './styles.css';

export const NavbarMobile = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [toggle, setToggle] = useState(true);

  const menuItems = [
    { key: "home", path: "/guest/main" },
    { key: "assessment", path: "/guest/assesment" },
    { key: "aboutUs", path: "/guest/about-us" },
    { key: "contactUs", path: "/guest/contact-us" },
  ];

  return (
    <div className="relative w-full z-50">
      {/* Темная версия (основное меню) */}
      <div
        className={`fixed top-0 left-0 w-full transition-all duration-500 ease-in-out ${toggle ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
          }`}
      >
        <div className="w-full">
          <div className="m-3">
            <div className="w-full rounded-[1234px] bg-[#4F3422] p-3">
              <div className="w-full flex flex-row items-center justify-between">
                <div className="flex flex-row items-center cursor-pointer" aria-hidden onClick={() => { navigate('/guest/main') }}>
                  <img className="w-[40px] h-[40px]" src={logo} alt="logo icon" />
                </div>

                <div className="flex flex-row gap-x-3 items-center">
                  <button onClick={() => i18n.changeLanguage("ru")} className={clsx(
                    "text-[24px] text-white hover:underline transition-all",
                    i18n.language === "ru" && "font-bold"
                  )}>RU</button>
                  <button onClick={() => i18n.changeLanguage("kk")} className={clsx(
                    "text-[24px] text-white hover:underline transition-all",
                    i18n.language === "kk" && "font-bold"
                  )}>KK</button>
                  <img src={menuIcon} alt="menu icon" onClick={() => setToggle(false)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Светлая версия (открытое меню) */}
      <div
        className={`fixed z-50 top-0 left-0 bg-[#4F3422] h-screen w-full transition-all duration-500 ease-in-out ${!toggle ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
          }`}
      >

        <div className="w-full bg-[#4F3422] relative z-0 overflow-hidden">
          <div className="absolute inset-0 flex justify-center z-0">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
          </div>
          <div className="relative m-3 z-10">
            <div className="w-full rounded-[1234px] bg-white p-3">
              <div className="w-full flex flex-row items-center justify-between">
                <div className="flex flex-row items-center cursor-pointer" aria-hidden onClick={() => { navigate('/guest/main') }}>
                  <img className="w-[40px] h-[40px]" src={logobrown} alt="logo icon" />
                </div>
                <div className="flex flex-row gap-x-3 items-center">
                  <button onClick={() => i18n.changeLanguage("ru")} className={clsx(
                    "text-[24px] text-[#4F3422] hover:underline transition-all",
                    i18n.language === "ru" && "font-bold"
                  )}>RU</button>
                  <button onClick={() => i18n.changeLanguage("kk")} className={clsx(
                    "text-[24px] text-[#4F3422] hover:underline transition-all",
                    i18n.language === "kk" && "font-bold"
                  )}>KK</button>
                  <img src={menuGrayIcon} alt="menu icon" onClick={() => setToggle(true)} />
                </div>
              </div>
            </div>
          </div>

          {/* Меню со списком */}
          <div className='relative z-10 px-6 pt-6 pb-2 w-full flex items-center justify-between h-full'>
            <div className='mx-auto w-full flex flex-col justify-between'>
              <div className="w-full">
                <ul className='w-full flex flex-col gap-y-6'>
                  {menuItems.map((item, index) => (
                    <li
                      key={index}
                      aria-hidden
                      className={clsx(
                        "text-[40px] font-semibold transition-all duration-500 cursor-pointer",
                        location.pathname === item.path ? "text-white font-bold flex items-center" : "text-gray-300")}
                      onClick={() => { setToggle(true); navigate(item.path); }}
                    >
                      {location.pathname === item.path && <span className="w-2 h-2 bg-[#9BB167] rounded-full mr-2"></span>}
                      {t(`menu.${item.key}`)}
                    </li>
                  ))}
                </ul>
              </div>

              <div className='w-full flex flex-row items-center  gap-x-2 py-3'>
                <p className=' text-white text-center font-medium text-[12px]'>{t("footer.terms")}</p>
                <span className="inline-block w-2 h-2 bg-[#9BB167] rounded-full"></span>
                <p className=' text-white text-center font-medium text-[12px]'>{t("footer.privacy")}</p>
              </div>
            </div>
          </div>
          <div className="relative z-10 mx-auto pt-2 pb-5 w-full flex flex-row justify-between">
            <div className="mx-auto flex flex-row justify-between gap-x-4">
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
          </div>
        </div>
      </div>
    </div>
  );
};
