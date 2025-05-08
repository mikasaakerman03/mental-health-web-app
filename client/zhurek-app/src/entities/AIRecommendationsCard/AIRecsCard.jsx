import React from 'react';
import { useTranslation } from 'react-i18next';
import useIsMobile from '../../shared/helpers/useIsMobile';
import group from '../../shared/assets/images/group.png';
import { affirmations } from './data';

export const AIRecsCard = () => {
  const { i18n } = useTranslation();
  const isMobile = useIsMobile();
  const lang = i18n.language;

  function getDailyAffirmation(lang) {
    const today = new Date();
    const seed = today.getDate() + today.getMonth() + today.getFullYear();
    const list = affirmations[lang] || affirmations['ru'];

    const index = seed % list.length;
    return list[index];
  }

  const dailyAffirmation = getDailyAffirmation(lang);

  return (
    <div
      className={`relative rounded-[${isMobile ? '20px' : '32px'}] p-4 w-full h-full flex items-center justify-center text-white shadow-md`}
      style={{
        backgroundImage: `url(${group})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#F6F1FF',
      }}
    >
      {/* Центрированный текст */}
      <p className={`${isMobile ? 'text-sm' : 'text-2xl'} font-bold text-center bg-white p-2 rounded-xl text-purple-500 max-w-[90%]`}>
        {dailyAffirmation}
      </p>
    </div>
  );
};
