import React from 'react';
import { useTranslation } from 'react-i18next';

import MeditationStats from '../../features/Meditation/MeditationScores';
import MeditationDonutChart from '../../features/Meditation/MeditationDonutChart';
import MeditationScoreList from '../../features/Meditation/MeditationScoreList';
import MeditationHistory from '../../features/Meditation/MeditationHistory';

export const MeditationDesktop = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-[#FAF7F4]">
      <div className="w-full flex flex-row justify-between gap-x-10 overflow-y-auto">
        <div className="w-[75%] overflow-y-auto m-10">
          <div className="flex flex-row w-full justify-between">
            <div className="">
              <h2 className="mb-5 text-4xl font-bold text-[#4F3422]">{t('meditation')}</h2>
              <h2 className="mb-5 text-3xl font-bold text-[#4F3422]">Today's statistics</h2>
            </div>
            <div className="">
              <button
                className="bg-[#91AD75] px-3 py-2 text-xl font-bold rounded-full text-white">
                Начать медитацию
              </button>
            </div>
          </div>
          <div className="flex flex-row w-1/2 gap-x-10">
            <div className='w-1/2'>
              <MeditationDonutChart />
            </div>
            <div className="w-1/2">
              <MeditationScoreList />
            </div>
          </div>
          <div className="w-full">
            <MeditationHistory />
          </div>
        </div>
        <div className="w-[20%] h-[95vh]">
          <MeditationStats />
        </div>
      </div>
    </div>
  )
}
