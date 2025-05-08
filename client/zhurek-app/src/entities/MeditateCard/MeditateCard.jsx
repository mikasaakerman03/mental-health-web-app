import React from 'react';
import { useTranslation } from 'react-i18next';
import useIsMobile from '../../shared/helpers/useIsMobile';
import { useNavigate } from 'react-router-dom';

import illustration from '../../shared/assets/images/meditate.svg';
import arrowRightIcon from '../../shared/assets/icons/arrow_se_brown.png';

export const MeditateCard = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  return (
    <div className={`bg-[#4F3422] rounded-[${isMobile ? '20px' : '32px'}] text-white p-4 w-full h-full flex items-center justify-between overflow-hidden relative`}>
      {/* Текстовая часть */}
      <div className="z-10 flex flex-col gap-2 w-1/2">
        <div className={`${isMobile ? 'text-lg' : 'text-2xl'} font-bold leading-tight`}>
          {t('meditate')}
        </div>
      </div>

      {/* Иллюстрация */}
      <img
        src={illustration}
        alt="Meditate Illustration"
        className="absolute right-0 bottom-0 h-full object-contain"
      />

      {/* Кнопка */}
      {!isMobile && (
        <div className="z-10 absolute bottom-4 right-4 bg-white rounded-full p-2 cursor-pointer">
          <img src={arrowRightIcon} alt="icon" className="w-4 h-4" aria-hidden onClick={() => { navigate('/meditate') }} />
        </div>
      )}
    </div>
  );
};
