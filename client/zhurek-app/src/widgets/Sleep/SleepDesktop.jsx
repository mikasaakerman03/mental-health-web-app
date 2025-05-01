import React from 'react';
import { useTranslation } from 'react-i18next';

import { SleepHistory } from '../../features/SleepComponent/SleepHistory';
import { SleepOverview } from '../../features/SleepComponent/SleepOverview';
import { SleepSuggestions } from '../../features/SleepComponent/SleepSuggestions';
import SleepQuality from '../../features/SleepComponent/SleepQuality';

export const SleepDesktop = () => {
  const { t } = useTranslation();

  return (
    <div className="w-[94vw] min-h-screen overflow-y-auto bg-[#FAF7F4]">
      <div className="w-full my-6 mx-6">
        <h2 className="text-4xl font-bold text-[#4F3422]">{t('sleep')}</h2>
      </div>
      <div className="w-full flex flex-row">
        <div className="w-[50%] p-5 gap-y-10 flex flex-col">
          <SleepQuality />
          <SleepHistory />
        </div>
        <div className="w-[45%] p-5 flex flex-col gap-y-5">
          <SleepOverview />
          <SleepSuggestions />
        </div>
      </div>
    </div>
  )
}
