import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import userIcon from '../../shared/assets/icons/user_brown.svg';
import messageIcon from '../../shared/assets/icons/messages_brown.svg';

import { EditDesktop } from './EditDesktop';
import { HelpDesktop } from './HelpDesktop';

export const SettingsMobile = () => {
  const { t } = useTranslation();
  const [activeKey, setActiveKey] = useState('personalInfo');

  const menuItems = [
    { icon: userIcon, key: 'personalInfo', label: t('settings.personalInfo'), component: <EditDesktop /> },
    { icon: messageIcon, key: 'helpCenter', label: t('settings.helpCenter'), component: <HelpDesktop /> },
  ];

  return (
    <div className="w-full min-h-screen bg-[#f8f6f3] p-4 flex flex-col">
      {/* Заголовок */}
      <h2 className="text-2xl text-center mt-5 font-bold text-[#4F3422] mb-6">{t('settings.title')}</h2>

      {/* Кнопки меню */}
      <div className="flex gap-2 mb-6">
        {menuItems.map(item => (
          <button
            key={item.key}
            onClick={() => setActiveKey(item.key)}
            className={`flex-1 flex items-center px-3 justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all
              ${activeKey === item.key ? 'bg-[#f5d1b9] text-[#4F3422]' : 'bg-white text-[#4F3422] hover:bg-[#fbe5d8]'}
            `}
          >
            <img src={item.icon} alt="" className="w-5 h-5" />
            {item.label}
          </button>
        ))}
      </div>

      {/* Активный контент */}
      <div className="bg-white p-4 rounded-xl shadow-md">
        {menuItems.find(item => item.key === activeKey)?.component}
      </div>
    </div>
  );
};
