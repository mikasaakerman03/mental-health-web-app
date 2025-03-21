import React, { useState } from 'react';
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
import downloadIcon from "../../assets/icons/download.png";

import logo from '../../assets/images/logo.png';

export const Navbar = () => {
  const [toggle, setToggle] = useState(true);

  const menuItems = [
    { name: "Home", active: true },
    { name: "Platform", active: false },
    { name: "Assessment", active: false },
    { name: "About Us", active: false },
    { name: "Blog", active: false },
    { name: "Contact Us", active: false }
  ];

  const contactDetails = [
    {
      icon: locationIcon,
      details: ["456 Oak Avenue", "Springfield, IL"],
    },
    {
      icon: callIcon2,
      details: ["+(555) 123-4567", "+(123) 456-789-000"],
    },
    {
      icon: bagIcon2,
      details: ["inquiries@freud.ai", "work@freud.ai"],
    },
  ];


  return (
    <div className="relative w-full">
      {/* Темная версия (основное меню) */}
      <div
        className={`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out ${toggle ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
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
        className={`absolute z-50 top-0 left-0 bg-[#4F3422] w-full transition-all duration-500 ease-in-out ${!toggle ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
          }`}
      >
        <div className="w-full bg-[#4F3422]">
          <div className="m-3">
            <div className="w-full rounded-[1234px] bg-white p-3">
              <div className="w-full flex flex-row items-center justify-between">
                <div className="flex flex-row gap-x-3">
                  <img src={callOrangeIcon} alt="call icon" />
                  <img src={bagGreenIcon} alt="bag icon" />
                </div>

                <div className="flex flex-row gap-x-3 items-center">
                  <p className="text-[24px] text-[#4F3422] font-light">Меню</p>
                  <img src={menuGrayIcon} alt="menu icon" onClick={() => setToggle(true)} />
                </div>
              </div>
            </div>
          </div>

          {/* Меню со списком */}
          <div className='p-10  w-full flex items-center justify-between h-full'>
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
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full flex flex-col p-3 justify-between py-auto">
                <div className='flex flex-row items-center'>
                  <p className='text-white font-medium text-[12px]'>Terms & conditions</p>
                  <span className="w-2 h-2 bg-[#926247] rounded-full mx-2"></span>
                  <p className='text-white font-medium text-[12px]'>Privacy Policy</p>
                </div>

                <div className=''>
                  <p className='text-white font-bold text-[36px]'>Harnessing the power of AI technology to revolutionize mental health.</p>
                </div>

                <div>
                  <div className="flex justify-between bg-[#4F3422] text-white p-6">
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
                      Get In Touch
                      <img src={arrowRightIcon} alt="arrow right" className="w-5 h-5" />
                    </button>

                    {/* Кнопка "Download App" */}
                    <button className="flex items-center gap-2 bg-[#FB8728] text-white font-bold px-6 py-3 rounded-full text-lg transition-all duration-300 hover:opacity-80">
                      Download App
                      <img src={downloadIcon} alt="download icon" className="w-5 h-5" />
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
