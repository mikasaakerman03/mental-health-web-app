import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Add } from '@mui/icons-material';

import { SleepHistory } from '../../features/SleepComponent/SleepHistory';
import { SleepOverview } from '../../features/SleepComponent/SleepOverview';
import { SleepSuggestions } from '../../features/SleepComponent/SleepSuggestions';
import SleepQuality from '../../features/SleepComponent/SleepQuality';
import { SleepModal } from '../../features/SleepComponent/SleepModal';

export const SleepMobile = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full min-h-screen overflow-y-auto bg-[#FAF7F4] p-4">
      {/* Заголовок */}
      <div className="flex flex-col h-[100vh]">
        <div className="h-[99vh] overflow-y-auto">
          <div className="w-full mb-6">
            <h2 className="text-center text-3xl font-bold text-[#4F3422]">{t('sleep')}</h2>
          </div>

          {/* Блоки */}
          <div className="flex flex-col gap-6">
            <SleepQuality />
            <SleepOverview />
            <SleepHistory />
            <SleepSuggestions />
          </div>
        </div>
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-10">
          <button
            className="bg-[#91AD75] p-5 ring-8 animate-pulse ring-[#d4e2c7] font-bold rounded-full text-white"
             onClick={() => setOpen(true)}
          >
            <Add />
          </button>
        </div>
      </div>
      {/* Модалка */}
      {open && <SleepModal open={open} setOpen={setOpen} />}
    </div>
  );
};
