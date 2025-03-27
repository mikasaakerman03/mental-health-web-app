import React from 'react';
import { useTranslation } from 'react-i18next';
import arrowRightIcon from '../../shared/assets/icons/arrowright_orange.svg';
import bookIcon from '../../shared/assets/icons/book2_white.svg';

const totalDays = 25;
const activeDays = 16;

export const HealthJournalCard = () => {
  const { t } = useTranslation();

  const getCircleColor = (index) => {
    if (index < activeDays) {
      return `bg-[#FCE9CD]`;
    }
    return `bg-[#F5B065]`;
  };

  return (
    <div className="bg-[#F29142] rounded-[32px] p-4 w-full h-full flex flex-col justify-between text-white shadow-md">
      {/* Заголовок */}
      <div className="flex justify-between items-center">
        <span className="text-lg font-medium">{t('journal')}</span>
        <img src={bookIcon} alt="" />
      </div>

      {/* Календарная сетка */}
      <div className="grid grid-cols-5 gap-2 mt-2">
        {Array.from({ length: totalDays }).map((_, i) => (
          <div
            key={i}
            className={`w-4 h-4 rounded-full ${getCircleColor(i)}`}
          />
        ))}
      </div>

      {/* Низ */}
      <div className="flex justify-between items-center">
        <span className="text-3xl font-bold">{activeDays}d</span>
        <div className="bg-white cursor-pointer rounded-full p-2">
          <img src={arrowRightIcon} alt="" />
        </div>
      </div>
    </div>
  );
};
