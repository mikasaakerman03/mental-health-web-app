import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import userIcon from '../../shared/assets/icons/user_brown.svg';
import { ZhurekChart } from '../../entities/ZhurekChart/ZhurekChart';
import { SleepLevelCard } from '../../entities/SleepChart/SleepChat';
import { HealthJournalCard } from '../../entities/HealthJournal/HealthJournal';
import { AiChatbotCard } from '../../entities/AIChatbotCard/AiChatbotCard';
import { MeditateCard } from '../../entities/MeditateCard/MeditateCard';
import { AIRecsCard } from '../../entities/AIRecommendationsCard/AIRecsCard';
import { getUser } from '../../shared/api/getUser';

export const DashboardDesktop = () => {
  const { t } = useTranslation();
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getUser();
        if (response.data && typeof response.data === 'object') {
          setUser(response.data);
        } else {
          console.error('response.data is not an array:', response.data);
        }
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      }
    }
    fetchUserData();
  }, []);

  return (
    <div className="h-screen w-full flex flex-col gap-y-5 p-5">
      <div className="h-[7%] flex flex-row justify-between items-center">
        <div>
          <p className='text-5xl font-bold text-[#4F3422]'>
            {t('hello', { name: user?.fullName })}
          </p>
        </div>
        <div className='flex flex-row h-full'>
          <img src={userIcon} alt="" className='p-3 w-full h-full rounded-full bg-[#f5f5f5]' />
        </div>
      </div>

      <div className="h-[60%] w-full flex flex-row gap-x-10">
        <div className="w-2/3">
          <ZhurekChart />
        </div>
        <div className='w-1/3 max-h-max'>
          <AIRecsCard />
        </div>
      </div>

      <div className="h-[30%] w-full flex flex-row justify-between gap-x-10">
        <div className="w-2/3 h-full flex flex-row justify-between gap-x-10">
          <SleepLevelCard />
          <HealthJournalCard />
          <AiChatbotCard />
        </div>
        <div className='w-1/3 h-full'>
          <MeditateCard />
        </div>
      </div>

    </div>
  )
}
