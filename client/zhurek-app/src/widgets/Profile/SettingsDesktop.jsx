import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import waveRightIcon from '../../shared/assets/icons/wave_right.svg';
import userIcon from '../../shared/assets/icons/user_brown.svg';
import messageIcon from '../../shared/assets/icons/messages_brown.svg';

import { EditDesktop } from './EditDesktop';
import { HelpDesktop } from './HelpDesktop';

export const SettingsDesktop = () => {
  const { t } = useTranslation();
  const [activeKey, setActiveKey] = useState('personalInfo');

  const menuItems = [
    { icon: userIcon, key: 'personalInfo', label: t('settings.personalInfo'), component: <EditDesktop /> },
    { icon: messageIcon, key: 'helpCenter', label: t('settings.helpCenter'), component: <HelpDesktop /> },
  ];

  return (
    <div className="w-full min-h-screen h-max bg-[#f8f6f3] overflow-y-auto">
      <h2 className="text-3xl font-bold text-[#4F3422] mb-6 p-10">{t('settings.title')}</h2>
      <div className="w-full flex flex-row gap-x-10">
        {/* Menu left */}
        <div className="flex flex-col h-full gap-y-3 p-3 w-1/5 bg-white ml-10 rounded-2xl">
          {menuItems.map(item => (
            <SettingRow
              key={item.key}
              label={item.label}
              icon={item.icon}
              isActive={activeKey === item.key}
              onClick={() => setActiveKey(item.key)}
            />
          ))}
        </div>

        {/* Settings right */}
        <div className="h-full p-3 mb-10 rounded-xl bg-white w-[60%]">
          {menuItems.find(item => item.key === activeKey)?.component}
        </div>
      </div>
    </div>
  );
};

const SettingRow = ({ label, onClick, isActive, icon }) => {
  return (
    <div
      onClick={onClick}
      className={`flex justify-between items-center px-6 py-4 rounded-xl cursor-pointer transition-all
        ${isActive ? 'bg-[#f5d1b9]' : 'bg-white hover:bg-[#fbe5d8]'}
      `}
    >
      <div className='text-base font-bold text-[#4F3422] flex flex-row gap-x-3 items-center'>
        <img src={icon} alt="" className="" />
        {label}
      </div>
      <img src={waveRightIcon} alt="" />
    </div>
  );
};
