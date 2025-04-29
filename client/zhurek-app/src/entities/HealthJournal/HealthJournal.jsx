import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import arrowRightIcon from '../../shared/assets/icons/arrowright_orange.svg';
import bookIcon from '../../shared/assets/icons/book2_white.svg';
import useIsMobile from '../../shared/helpers/useIsMobile';

const totalDays = 25;
const activeDays = 16;

export const HealthJournalCard = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const getCircleColor = (index) => {
    return index < activeDays ? 'bg-[#FCE9CD]' : 'bg-[#F5B065]';
  };

  return (
    <div className={`bg-[#F29142] rounded-[${isMobile ? '20px' : '32px'}] p-4 w-full h-full flex flex-col justify-between text-white shadow-md ${isMobile ? '' : ''}`}>
      {/* Заголовок */}
      <div className="flex justify-between items-center">
        <span className={`${isMobile ? 'text-md' : 'text-lg'} font-semibold`}>{t('journal')}</span>
        <img src={bookIcon} alt="Book Icon" className={isMobile ? 'w-5 h-5' : 'w-6 h-6'} />
      </div>

      {/* Календарная сетка */}
      <div className={`grid grid-cols-5 ${isMobile ? 'gap-1 mt-3' : 'gap-2 mt-4'}`}>
        {Array.from({ length: totalDays }).map((_, i) => (
          <div
            key={i}
            className={`${isMobile ? 'w-3 h-3' : 'w-4 h-4'} rounded-full ${getCircleColor(i)}`}
          />
        ))}
      </div>

      {/* Низ */}
      <div className={`flex justify-between items-center ${isMobile ? 'hidden' : 'mt-4'}`}>
        <span className={`${isMobile ? 'text-2xl' : 'text-3xl'} font-bold`}>{activeDays}d</span>
        <div
          aria-hidden
          className="bg-white cursor-pointer rounded-full p-2"
          onClick={() => { navigate ('/journal')}}>
          <img src={arrowRightIcon} alt="Arrow Right" className={isMobile ? 'w-4 h-4' : 'w-5 h-5'} />
        </div>
      </div>
    </div>
  );
};
