import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import userIcon from '../../shared/assets/icons/user_brown.svg';
import { SleepLevelCard } from '../../entities/SleepChart/SleepChat';
import { HealthJournalCard } from '../../entities/HealthJournal/HealthJournal';
import { AiChatbotCard } from '../../entities/AIChatbotCard/AiChatbotCard';
import { MeditateCard } from '../../entities/MeditateCard/MeditateCard';
import { AIRecsCard } from '../../entities/AIRecommendationsCard/AIRecsCard';
import { getUser } from '../../shared/api/getUser';
import { DailyGoals } from '../../entities/DailyGoals/DailyGoals';

export const DashboardDesktop = () => {
  const { t } = useTranslation();
  const [user, setUser] = useState();
  const navigate = useNavigate();

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
    <div className="h-full w-full flex flex-col gap-y-5 p-5">
      <div className="h-[7%] flex flex-row justify-between items-center">
        <div>
          <p className='text-5xl font-bold text-[#4F3422]'>
            {t('hello', { name: user?.fullName })}
          </p>
        </div>
        <div className='flex flex-row h-full'>
          <img 
            src={userIcon} alt="" 
            className='p-3 w-full h-full rounded-full bg-[#f5f5f5] cursor-pointer' 
            onClick={()=>{navigate('/profile')}}/>
        </div>
      </div>

      <div className="h-full w-full flex flex-row gap-x-10">
        <div className="w-2/3">
          <DailyGoals/>
        </div>
        <div className='w-1/3 max-h-max'>
          <AIRecsCard />
        </div>
      </div>

      <div className="h-[40%] pb-10 w-full flex flex-row justify-between gap-x-10">
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
