import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Add } from '@mui/icons-material';
import { JournalYearly } from '../../entities/JournalStats/JournalYearly';
import { JournalMonthly } from '../../entities/JournalStats/JournalMonthly';
import { JournalDaily } from '../../entities/JournalStats/JournalDaily';

export const JournalMobile = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="w-[94vw] min-h-screen bg-[white] p-4 flex flex-col gap-6 mt-4">
      {/* Заголовок */}
      <div className="flex flex-col h-[100vh]">
        <div className="h-[99vh] overflow-y-auto">
          <div className="flex justify-center items-center mb-7">
            <h2 className="text-3xl font-bold text-[#4F3422]">{t('journalPage.journal')}</h2>
          </div>

          {/* Блоки */}
          <div className="flex flex-col gap-6">
            <JournalDaily />
            <JournalMonthly />
            <JournalYearly />
          </div>
        </div>
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-10">
          <button
            className="bg-[#91AD75] p-5 ring-8 animate-pulse ring-[#d4e2c7] font-bold rounded-full text-white"
            onClick={() => { navigate('add-journal') }}
          >
            <Add />
          </button>
        </div>
      </div>
    </div>
  );
};
