import React from 'react';

import sleepIcon from '../../shared/assets/icons/sleep_purple.svg';
import { CircularProgress } from './CircularProgress';

export const SleepQualityCard = () => {
  return (
    <div className="flex items-center justify-between p-3 bg-white rounded-2xl shadow-sm w-full">

      {/* Левая часть */}
      <div className="flex items-center gap-3">
        {/* Иконка */}
        <div className="w-10 h-10 bg-[#F3EFFD] rounded-xl flex items-center justify-center">
          <img src={sleepIcon} alt="Sleep Icon" className="w-5 h-5" />
        </div>

        {/* Тексты */}
        <div className="flex flex-col">
          <span className="text-[#5A3E2B] font-bold text-base">Sleep Quality</span>
          <span className="text-[#948B84] text-sm">Insomniac (~2h Avg)</span>
        </div>
      </div>

      {/* Правая часть */}
      <div className="w-1/5 flex items-center justify-center">
        <CircularProgress value={20} total={100} />
      </div>

    </div>
  );
};
