import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import clsx from 'clsx';

import callIcon from '../../assets/icons/call_brown.png';
import bagIcon from '../../assets/icons/bag_brown.png';
import menuIcon from '../../assets/icons/menu_brown.png';
import callOrangeIcon from '../../assets/icons/call_orange.png';
import bagGreenIcon from '../../assets/icons/bag_green.png';
import menuGrayIcon from '../../assets/icons/menu_gray.png';
import locationIcon from "../../assets/icons/location.png";
import callIcon2 from "../../assets/icons/call_white.png";
import bagIcon2 from "../../assets/icons/bag_white.png";
import arrowRightIcon from "../../assets/icons/arrowright_white.png";
import logo from '../../assets/images/logo.png';

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [toggle, setToggle] = useState(true);

  const menuItems = [
    { key: "home", active: true },
    { key: "platform", active: false },
    { key: "assessment", active: false },
    { key: "aboutUs", active: false },
    { key: "blog", active: false },
    { key: "contactUs", active: false },
  ];

  const contactDetails = [
    {
      icon: locationIcon,
      details: ["Сатпаева, 22", "050013, Алматы"],
    },
    {
      icon: callIcon2,
      details: ["+7 776 856 8556", "+7 776 920 0807"],
    },
    {
      icon: bagIcon2,
      details: ["mikasaakerman03@gmail.com", "meruertsajlauova@gmail.com"],
    },
  ];


  return (
    <div className="relative w-full">
      {/* Темная версия (основное меню) */}
      <div
        className={`fixed bg-white top-0 left-0 w-full transition-all duration-500 ease-in-out ${toggle ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
          }`}
      >
        <div className="w-full">
          <div className="m-3">
            <div className="w-full rounded-[1234px] bg-[#4F3422] p-3">
              <div className="w-full flex flex-row items-center justify-between">
                <div className="flex flex-row gap-x-3">
                  <img src={callIcon} alt="call icon" />
                  <img src={bagIcon} alt="bag icon" />
                </div>

                <div className="flex flex-row gap-x-3 items-center">
                  <img className="w-[40px] h-[40px]" src={logo} alt="logo icon" />
                  <p className="font-bold text-[40px] text-white">zhurek</p>
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
                  <p className="text-[24px] text-white font-light">Меню</p>
                  <img src={menuIcon} alt="menu icon" onClick={() => setToggle(false)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Светлая версия (открытое меню) */}
      <div
        className={`fixed z-50 top-0 left-0 bg-[#4F3422] w-full transition-all duration-500 ease-in-out ${!toggle ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
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
                <div className="flex flex-row gap-x-3">
                  <img src={callOrangeIcon} alt="call icon" />
                  <img src={bagGreenIcon} alt="bag icon" />
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
                  <p className="text-[24px] text-[#4F3422] font-light">Меню</p>
                  <img src={menuGrayIcon} alt="menu icon" onClick={() => setToggle(true)} />
                </div>
              </div>
            </div>
          </div>

          {/* Меню со списком */}
          <div className='relative z-10 p-10  w-full flex items-center justify-between h-full'>
            <div className='mx-auto w-[70%] flex flex-row justify-between'>
              <div className="w-full">
                <ul className='w-full flex flex-col gap-y-6'>
                  {menuItems.map((item, index) => (
                    <li
                      key={index}
                      className={clsx(
                        "font-semibold text-[40px] transition-all duration-500",
                        !item.active && "text-gray-300",
                        item.active && "text-white font-bold flex items-center"
                      )}
                    >
                      {item.active && <span className="w-2 h-2 bg-[#9BB167] rounded-full mr-2"></span>}
                      {t(`menu.${item.key}`)}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full flex flex-col p-3 justify-between py-auto">
                <div className='flex flex-row items-center'>
                  <p className='text-white font-medium text-[12px]'>{t("footer.terms")}</p>
                  <span className="w-2 h-2 bg-[#926247] rounded-full mx-2"></span>
                  <p className='text-white font-medium text-[12px]'>{t("footer.privacy")}</p>
                </div>

                <div className=''>
                  <p className='text-white font-bold text-[36px]'>{t("footer.slogan")}</p>
                </div>

                <div className='flex flex-col'>
                  <div className="flex justify-between bg-[#4F3422] text-white mb-4">
                    {contactDetails.map((item, index) => (
                      <div key={index} className="flex flex-col items-center text-center">
                        <img src={item.icon} alt="icon" className="mb-2" />
                        {item.details.map((detail, i) => (
                          <p key={i} className="text-lg">{detail}</p>
                        ))}
                      </div>
                    ))}
                  </div>
                  <div className="flex mt-4 gap-4">
                    {/* Кнопка "Get In Touch" */}
                    <button className="flex items-center gap-2 bg-[#9BB26D] text-white font-bold px-6 py-3 rounded-full text-lg transition-all duration-300 hover:opacity-80">
                      {t("buttons.getInTouch")}
                      <img src={arrowRightIcon} alt="arrow right" className="w-5 h-5" />
                    </button>

                    {/* Кнопка "Download App" */}
                    <button className="flex items-center gap-2 bg-[#FB8728] text-white font-bold px-6 py-3 rounded-full text-lg transition-all duration-300 hover:opacity-80">
                      {t("buttons.downloadApp")}
                      <img src={arrowRightIcon} alt="download icon" className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
