import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import api from "../../shared/helpers/axiosConfig";

export const SleepOverview = () => {
  const { t } = useTranslation();

  const radius = 60;
  const circumference = 2 * Math.PI * radius;

  const [averageSleepHours, setAverageSleepHours] = useState(0);
  const [hoursSleptToday, setHoursSleptToday] = useState(0);

  useEffect(() => {
    const fetchSleepData = async () => {
      try {
        const todayResponse = await api.get('chat/sleep/today-duration');
        setHoursSleptToday(todayResponse.data.hoursSleptToday || 0);

        const weeklyResponse = await api.get('chat/sleep/average-weekly-duration');
        setAverageSleepHours(weeklyResponse.data.averageSleepHours || 0);
      } catch (error) {
        console.error('Ошибка загрузки данных сна:', error);
      }
    };

    fetchSleepData();
  }, []);

  const todayPercent = Math.min(hoursSleptToday / 9, 1); 
  const averagePercent = Math.min(averageSleepHours / 9, 1); 

  return (
    <div className="flex flex-col md:flex-row gap-4">
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
              strokeDashoffset={circumference * (1 - todayPercent)}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-[#5d4037] text-2xl font-semibold">
            {t('hours', { value: hoursSleptToday.toFixed(1) })}
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
              strokeDashoffset={circumference * (1 - averagePercent)}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-[#5d4037] text-2xl font-semibold">
            {t('hours', { value: averageSleepHours?.toFixed(1) })}
          </div>
        </div>
      </div>
    </div>
  );
};
