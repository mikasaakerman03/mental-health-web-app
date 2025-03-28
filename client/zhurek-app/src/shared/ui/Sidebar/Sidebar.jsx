import React from 'react';
import clsx from 'clsx';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import logoIcon from '../../assets/images/logo.png';
import avatar from '../../assets/images/avatar.jpg';
import bookIcon from '../../assets/icons/book_lightbrown.svg';
import dashboardIcon from '../../assets/icons/dashboard_lightbrown.svg';
import penIcon from '../../assets/icons/pen_lightbrown.svg';
import chatbotIcon from '../../assets/icons/chatbot_lightbrown.svg';
import brainIcon from '../../assets/icons/brain_lightbrown.svg';
import logout from '../../assets/icons/logout.svg';

export const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { i18n } = useTranslation();

  const menuItems = [
    { icon: dashboardIcon, link: 'dashboard' },
    { icon: chatbotIcon, link: 'chatbot' },
    // { icon: penIcon, link: '' },
    // { icon: brainIcon, link: '' },
    // { icon: bookIcon, link: '' }
  ];

  const handleLogOut = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('refreshToken');
    navigate('/guest/main');
  }

  return (
    <div className='h-full w-[80px] border-2 border-[#a17354] rounded-[1000px]'>
      <div className='h-full w-full flex flex-col justify-between items-center p-3'>
        <div>
          <img src={logoIcon} alt="" />
          <div className="flex flex-col gap-y-3 items-center mt-3">
            <button onClick={() => i18n.changeLanguage("ru")} className={clsx(
              "text-[24px] text-white hover:underline transition-all",
              i18n.language === "ru" && "font-bold"
            )}>RU</button>
            <button onClick={() => i18n.changeLanguage("kk")} className={clsx(
              "text-[24px] text-white hover:underline transition-all",
              i18n.language === "kk" && "font-bold"
            )}>KK</button>
          </div>
        </div>

        <div className="flex flex-col gap-y-3 items-center justify-between">
          {menuItems.map((item, index) => (
            <div key={index} aria-hidden onClick={() => { navigate(item.link) }}>
              <img
                src={item.icon}
                alt={`menu-${index}`}
                className={clsx("w-10 h-10 p-2 hover:bg-[#c291715e] hover:rounded-full after:rounded-full cursor-pointer", location.pathname === `/${item.link}` && "bg-[#c291715e] rounded-full")} />
            </div>
          ))}
        </div>

        <div className='flex flex-col gap-y-2'>
          <img src={avatar} alt="" className="w-[60px] rounded-full shadow-sm cursor-pointer" />
          <img src={logout} alt="" className="w-[60px] rounded-full border-2 border-white shadow-sm cursor-pointer" onClick={handleLogOut}/>
        </div>
      </div>
    </div>
  )
}
