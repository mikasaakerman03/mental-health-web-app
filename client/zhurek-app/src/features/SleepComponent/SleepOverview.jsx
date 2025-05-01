import React from "react";
import { useTranslation } from 'react-i18next';

export const SleepOverview = () => {
  const { t } = useTranslation();

  const radius = 60;
  const circumference = 2 * Math.PI * radius;

  const remValue = 8.5;
  const coreValue = 7.8;

  const remPercent = Math.min(remValue / 9, 1);
  const corePercent = Math.min(coreValue / 9, 1);

  return (
    <div className="flex gap-4">
      {/* REM Card */}
      <div className="w-[50%] py-4 bg-[#fff] rounded-xl flex flex-col items-center justify-center shadow-sm relative">
        <div className="text-2xl text-[#5d4037] font-bold mb-4 flex items-center gap-1">
          {t("youSleptFor")}
        </div>
        <div className="relative w-40 h-40">
          <svg width="160" height="160" className="rotate-[-90deg]">
            <circle
              cx="80"
              cy="80"
              r={radius}
              stroke="#e5e5e5"
              strokeWidth="6"
              fill="none"
            />
            <circle
              cx="80"
              cy="80"
              r={radius}
              stroke="#88b04b"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={circumference * (1 - remPercent)} // или corePercent
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-[#5d4037] text-2xl font-semibold">
            {t('hours', { value: remValue })}
          </div>
        </div>


      </div>

      {/* CORE Card */}
      <div className="w-[50%] py-4 bg-[#fff] rounded-xl flex flex-col items-center justify-center shadow-sm relative">
        <div className="text-2xl text-[#5d4037] font-bold mb-4 flex items-center gap-1">
          {t("weekAverage")}
        </div>
        <div className="relative w-40 h-40">
          <svg width="160" height="160" className="rotate-[-90deg]">
            <circle
              cx="80"
              cy="80"
              r={60}
              stroke="#e5e5e5"
              strokeWidth="6"
              fill="none"
            />
            <circle
              cx="80"
              cy="80"
              r={60}
              stroke="#f57c00"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={circumference * (1 - corePercent)}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-[#5d4037] text-2xl font-semibold">
            {t('hours', { value: coreValue })}
          </div>
        </div>
      </div>
    </div>
  );
};
