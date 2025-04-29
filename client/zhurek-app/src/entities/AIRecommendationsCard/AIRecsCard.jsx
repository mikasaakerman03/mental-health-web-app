import React from 'react';
import { useTranslation } from 'react-i18next';
import useIsMobile from '../../shared/helpers/useIsMobile';
import group from '../../shared/assets/images/group.png';
import arrowRightIcon from '../../shared/assets/icons/arrowright_purple.svg';

export const AIRecsCard = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  return (
    <div
      className={`rounded-[${isMobile ? '20px' : '32px'}] p-4 w-full h-full flex flex-col justify-between text-white shadow-md`}
      style={{
        backgroundImage: `url(${group})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#F6F1FF',
      }}
    >
      {/* Текст посередине */}
      <p className={`${isMobile ? 'text-sm' : 'text-lg'} font-bold text-center bg-white p-2 rounded-xl text-purple-500`}>
        {t('airecs')}
      </p>

      {/* Нижняя кнопка */}
      <div className={isMobile ? "hidden" : "self-end bg-white cursor-pointer rounded-full p-2 w-10 h-10 flex items-center justify-center mt-4"}>
        <img src={arrowRightIcon} alt="icon" className={isMobile ? 'w-4 h-4' : 'w-5 h-5'} />
      </div>
    </div>
  );
};
