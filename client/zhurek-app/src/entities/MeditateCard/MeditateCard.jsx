import React from 'react';
import { useTranslation } from 'react-i18next';

import illustration from '../../shared/assets/images/meditate.svg';
import arrowRightIcon from '../../shared/assets/icons/arrow_se_brown.png';

export const MeditateCard = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#4F3422] rounded-[32px] text-white p-6 w-full h-full flex items-center justify-between overflow-hidden relative">
      {/* Текстовая часть */}
      <div className="z-10 flex flex-col gap-4 w-1/2">
        <div className="text-2xl font-bold leading-tight">
          {t('meditate')}
        </div>
      </div>

      {/* Иллюстрация */}
      <img
        src={illustration}
        alt="pro"
        className="absolute right-0 bottom-0 h-full object-contain"
      />

      {/* Кнопка */}
      <div className="z-10 absolute bottom-6 right-6 bg-white rounded-full p-2 cursor-pointer">
        <img src={arrowRightIcon} alt="icon" className="w-5 h-5" />
      </div>
    </div>
  );
};
