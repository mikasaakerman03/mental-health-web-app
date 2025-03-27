import React from 'react';
import { useTranslation } from 'react-i18next';

import group from '../../shared/assets/images/group.png';
import arrowRightIcon from '../../shared/assets/icons/arrowright_purple.svg';

export const AIRecsCard = () => {
  const { t } = useTranslation();

  return (
    <div className=" rounded-[32px] p-6 w-full h-full flex flex-col justify-between text-white shadow-md"
      style={{
        backgroundImage: `url(${group})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#F6F1FF',
      }}>

      <p className="self-center text-center text-lg font-bold bg-white p-2 rounded-xl text-purple-500">
        {t('airecs')}
      </p>

      <div className="self-end bg-white cursor-pointer rounded-full p-2 w-10 h-10 flex items-center justify-center">
        <img src={arrowRightIcon} alt="icon" className="w-5 h-5" />
      </div>

    </div>
  )
}
