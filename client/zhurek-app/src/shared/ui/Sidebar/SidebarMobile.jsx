import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { useTranslation } from "react-i18next";

import logoIcon from '../../assets/images/logo.png';
import avatar from '../../assets/images/avatar.jpg';
import dashboardIcon from '../../assets/icons/dashboard_lightbrown.svg';
import chatbotIcon from '../../assets/icons/chatbot_lightbrown.svg';
import logoutIcon from '../../assets/icons/logout.svg';
import penIcon from '../../assets/icons/pen_lightbrown.svg';

export const SidebarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { i18n, t } = useTranslation();

  const menuItems = [
    { icon: dashboardIcon, link: 'dashboard', title: `${t('sidebarMenu.dashboard')}` },
    { icon: chatbotIcon, link: 'chatbot', title: `${t('sidebarMenu.chatbot')}` },
    { icon: penIcon, link: 'journal', title: `${t('journalPage.myJournals')}` },
  ];

  const handleLogOut = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('refreshToken');
    navigate('/guest/main');
    setIsOpen(false);
  };

  const handleNavigate = title => {
    navigate(title);
    setIsOpen(false);
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        className="fixed top-4 left-4 z-50 p-2 bg-[#a17354] rounded-md md:hidden"
        onClick={() => setIsOpen(true)}
      >
        {/* Burger Icon */}
        <div className="space-y-1">
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </div>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div className={clsx(
        "fixed top-0 left-0 h-full w-64 bg-[#4F3422] flex flex-col justify-between items-center p-4 z-50 transform transition-transform duration-300 md:hidden",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="w-full flex flex-col items-center">
          <img src={logoIcon} alt="Logo" className="w-10 h-10 mb-6" />
          <div className="flex gap-4 mb-6">
            <button onClick={() => i18n.changeLanguage("ru")} className={clsx(
              "text-[20px] text-white hover:underline transition-all",
              i18n.language === "ru" && "font-bold"
            )}>RU</button>
            <button onClick={() => i18n.changeLanguage("kk")} className={clsx(
              "text-[20px] text-white hover:underline transition-all",
              i18n.language === "kk" && "font-bold"
            )}>KK</button>
          </div>

          <div className="flex flex-col gap-6 items-center">
            {menuItems.map((item, index) => (
              <div key={index} onClick={() => handleNavigate(item.link)} className="cursor-pointer w-full flex flex-row items-center gap-x-2 hover:bg-[#c291715e] p-3 hover:rounded-lg">
                <img
                  src={item.icon}
                  alt={`menu-${index}`}
                  className={clsx(
                    "w-10 h-10 p-2 rounded-full",
                    location.pathname === `/${item.link}` && "bg-[#c291715e]"
                  )}
                />
                <p className={clsx("text-[#f1e2d882]",
                  location.pathname === `/${item.link}` && "font-bold"
                )}>{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 items-center mb-4">
          <div
            aria-hidden
            className="w-full flex flex-row items-center gap-x-2"
            onClick={() => { navigate('/profile'); setIsOpen(false); }}>
            <img
              src={avatar}
              alt="Avatar"
              className="w-10 h-10 rounded-full shadow-sm cursor-pointer"
            />
            <p className="text-[#f1e2d882] font-bold">{`${t('sidebarMenu.profile')}`}</p>
          </div>
          <div
            aria-hidden
            className="w-full flex flex-row items-center gap-x-2"
            onClick={handleLogOut}>
            <img
              src={logoutIcon}
              alt="Logout"
              className="w-10 h-10 rounded-full border-2 border-white shadow-sm cursor-pointer"
            />
            <p className="text-[#f1e2d882] font-bold">{`${t('sidebarMenu.logout')}`}</p>
          </div>
        </div>
      </div>
    </>
  );
};
