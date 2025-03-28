import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import profilePic from '../../shared/assets/images/avatar.jpg';
import bgImage from '../../shared/assets/images/9621870.jpg';
import editIcon from '../../shared/assets/icons/edit_white.svg';
import { SleepLevelCard } from '../../entities/SleepChart/SleepChat';
import { AiChatbotCard } from '../../entities/AIChatbotCard/AiChatbotCard';
import { HealthJournalCard } from '../../entities/HealthJournal/HealthJournal';
import { MeditateCard } from '../../entities/MeditateCard/MeditateCard';

export const ProfileDesktop = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen bg-[#F5F5F5] flex justify-center items-start">
      <div className="bg-white rounded-3xl shadow-xl w-full h-full overflow-hidden">
        {/* Header */}
        <div
          className="h-[300px] bg-cover bg-center relative"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="absolute left-1/2 bottom-[-60px] transform -translate-x-1/2 w-[120px] h-[120px] rounded-full border-4 border-white overflow-hidden">
            <img src={profilePic} alt="profile" className="w-full h-full object-cover" />
          </div>
          <div className="absolute left-1/2 bottom-[-75px] transform -translate-x-1/2 w-[40px] h-[40px] rounded-full overflow-hidden">
            <img src={editIcon} alt="profile" className="w-full h-full bg-[#4F3422] p-2 cursor-pointer" onClick={() => { navigate('/profile/settings'); }} />
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-[#4F3422]">Дана</h2>
          <span className="mt-1 inline-block text-sm px-4 py-1 rounded-full border border-[#C0A091] text-[#4F3422]">
            {t('profile.membership')}
          </span>

          {/* Info stats */}
          <div className="flex justify-center gap-16 mt-6">
            <div className="text-center">
              <p className="text-sm text-gray-500">{t('profile.age')}</p>
              <p className="text-2xl font-bold text-[#4F3422]">17</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500">{t('profile.weight')}</p>
              <p className="text-2xl font-bold text-[#4F3422]">48{" "}<span className="text-sm font-normal">кг</span></p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500">{t('profile.height')}</p>
              <p className="text-2xl font-bold text-[#4F3422]">162{" "}<span className="text-sm font-normal">см</span></p>
            </div>
          </div>

          {/* Cards */}
          <div className="w-2/3 flex flex-row gap-x-10 mx-auto mt-10 min-h-full">
            <SleepLevelCard />
            <HealthJournalCard />
            <AiChatbotCard />
            <div className="w-full min-h-full">
              <MeditateCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};