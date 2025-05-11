import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { JournalYearly } from '../../entities/JournalStats/JournalYearly'
import { JournalMonthly } from '../../entities/JournalStats/JournalMonthly'
import { JournalDaily } from '../../entities/JournalStats/JournalDaily'

export const JournalDesktop = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <div className="w-full my-8 px-6 flex flex-row items-center justify-between">
        <h2 className="text-4xl font-bold text-[#4F3422]">{t('journalPage.journal')}</h2>
        <button
          className="bg-[#91AD75] px-3 py-2 rounded-full text-white"
          onClick={() => { navigate('add-journal') }}>+ {t('journalPage.addRecord')}
        </button>
      </div>
      <div className='w-full p-3 flex flex-row gap-8 justify-between'>
        <div className="w-[35%] flex flex-col gap-5">
          <JournalYearly />
          <JournalMonthly />
        </div>

        <div className="w-[60%] flex flex-col mx-5">
          <JournalDaily />
        </div>
      </div>
    </div>
  )
}
