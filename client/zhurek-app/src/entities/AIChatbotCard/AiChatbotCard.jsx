import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import useIsMobile from '../../shared/helpers/useIsMobile'; // путь подстрой под себя

import botIcon from '../../shared/assets/icons/bot_white.svg';
import arrowRightIcon from '../../shared/assets/icons/arrowright_purple.svg';

export const AiChatbotCard = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  return (
    <div
      aria-hidden
      onClick={() => {
        if (isMobile) {
          navigate('/chatbot');
        }
      }}
      className={`bg-[#8854F6] rounded-[${isMobile ? '20px' : '32px'}] p-4 w-full h-full flex flex-col justify-between text-white shadow-md`}>
      {/* Header */}
      <div className="flex justify-between items-center">
        <span className={`${isMobile ? 'text-sm' : 'text-lg'} font-semibold`}>
          {t('chatbotTitle')}
        </span>
        <img src={botIcon} alt="bot" className={isMobile ? 'w-4 h-4' : 'w-5 h-5'} />
      </div>

      {/* Bars */}
      <div className={`flex flex-col ${isMobile ? 'gap-2 mt-2' : 'gap-3 mt-4'}`}>
        {/* 1 */}
        <div className="bg-[#763BD3] h-4 rounded-full relative overflow-hidden">
          <div className="bg-[#C2AFFF] w-[40%] h-full rounded-full absolute left-0 top-0" />
        </div>
        {/* 2 */}
        <div className="bg-[#763BD3] h-4 rounded-full relative overflow-hidden">
          <div className="bg-[#C2AFFF] w-[60%] h-full rounded-full absolute left-[40%] top-0" />
        </div>
        {/* 3 */}
        <div className="bg-[#763BD3] h-4 rounded-full relative overflow-hidden">
          <div className="bg-[#C2AFFF] w-[70%] h-full rounded-full absolute left-0 top-0" />
        </div>
      </div>

      {/* Bottom */}
      <div className={`flex justify-between items-center ${isMobile ? 'mt-2' : 'mt-4'}`}>
        <span className={`${isMobile ? 'text-xl' : 'text-3xl'} font-bold`}>
          187+
        </span>

        <div
          className={isMobile ? "hidden" : "bg-white cursor-pointer rounded-full p-2 w-10 h-10 flex items-center justify-center"}
          aria-hidden
          onClick={() => { navigate('/chatbot') }}
        >
          <img src={arrowRightIcon} alt="icon" className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};
