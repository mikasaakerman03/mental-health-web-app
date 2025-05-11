import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { SleepHistory } from '../../features/SleepComponent/SleepHistory';
import { SleepOverview } from '../../features/SleepComponent/SleepOverview';
import { SleepSuggestions } from '../../features/SleepComponent/SleepSuggestions';
import SleepQuality from '../../features/SleepComponent/SleepQuality';
import { SleepModal } from '../../features/SleepComponent/SleepModal';

export const SleepDesktop = () => {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);
  return (
    <div className="bg-[#FAF7F4]">
      <div className="w-[90%] my-6 ml-6 flex flex-row items-center justify-between">
        <h2 className="text-4xl font-bold text-[#4F3422]">{t('sleep')}</h2>
        <button
          className="bg-[#91AD75] px-3 py-2 rounded-full text-white"
          onClick={() => { setOpen(true) }}>+ {t('journalPage.addRecord')}
        </button>
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
      {open && <SleepModal open={open} setOpen={setOpen} />}
    </div>
  )
}
