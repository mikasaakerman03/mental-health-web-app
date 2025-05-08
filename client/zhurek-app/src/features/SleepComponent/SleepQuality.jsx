import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { Hotel, Bedtime, Alarm } from "@mui/icons-material";

import api from "../../shared/helpers/axiosConfig";

export default function SleepQuality() {
  const { t } = useTranslation();

  const [sleepCategory, setSleepCategory] = useState(0);
  const [averageStartTime, setAverageStartTime] = useState('22:00');
  const [averageEndTime, setAverageEndTime] = useState('06:00');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const durationResponse = await api.get('chat/sleep/average-weekly-duration');
        const startTimeResponse = await api.get('chat/sleep/average-start-time');
        const endTimeResponse = await api.get('chat/sleep/average-end-time');

        setSleepCategory(durationResponse.data.sleepCategory ?? 0);
        setAverageStartTime(startTimeResponse.data.averageTime || '22:00');
        setAverageEndTime(endTimeResponse.data.averageTime || '06:00');
      } catch (error) {
        console.error('Ошибка загрузки данных сна:', error);
      }
    };

    fetchData();
  }, []);

  const getSleepCategoryLabel = (category) => {
    switch (category) {
      case 0:
        return t('normalSleep'); // Нормальный сон
      case 1:
        return t('coreSleep'); // Основной сон
      case 2:
        return t('insomniac'); // Бессонница
      default:
        return '';
    }
  };

  return (
    <div className="flex flex-row items-stretch justify-between gap-5 w-full">
      {/* Card 1 — Sleep Category */}
      <div className="relative w-full h-[208px] rounded-3xl bg-[#b39ddb] overflow-hidden text-white flex flex-col items-center justify-center shadow-md">
        {/* Blobs */}
        <div className="absolute w-60 h-60 bg-[#7049ab] rounded-full opacity-10 -top-10 -left-10"></div>
        <div className="absolute w-32 h-32 bg-[#392557] rounded-full opacity-10 top-10 -right-20"></div>
        <div className="absolute w-20 h-20 bg-[#493864] rounded-full opacity-10 -bottom-4 left-16"></div>

        {/* Content */}
        <Hotel fontSize="large" className="z-10 mb-1" />
        <h1 className="text-2xl font-bold z-10">{getSleepCategoryLabel(sleepCategory)}</h1>
      </div>

      {/* Card 2 — Average Bed Time */}
      <div className="relative w-full h-[208px] rounded-3xl bg-[#88b04b] overflow-hidden text-white flex flex-col items-center justify-center shadow-md">
        {/* Blobs */}
        <div className="absolute w-60 h-60 bg-[#b2dfdb] rounded-full opacity-10 -top-15 -left-10"></div>
        <div className="absolute w-32 h-32 bg-[#b2dfdb] rounded-full opacity-10 top-39 right-1"></div>
        <div className="absolute w-20 h-20 bg-[#b2dfdb] rounded-full opacity-10 bottom-4 left-16"></div>

        {/* Content */}
        <Bedtime fontSize="large" className="z-10" />
        <h1 className="text-[50px] font-bold z-10">{averageStartTime}</h1>
        <p className="text-lg font-medium z-10 p-3 text-center">{t('goToBedTime')}</p>
      </div>

      {/* Card 3 — Average Wake Time */}
      <div className="relative w-full h-[208px] rounded-3xl bg-[#f57c00] overflow-hidden text-white flex flex-col items-center justify-center shadow-md">
        {/* Blobs */}
        <div className="absolute w-60 h-60 bg-[#ffe0b2] rounded-full opacity-10 -top-1 -left-10"></div>
        <div className="absolute w-32 h-32 bg-[#ffe0b2] rounded-full opacity-10 top-10 -right-1"></div>
        <div className="absolute w-20 h-20 bg-[#ffe0b2] rounded-full opacity-10 bottom-4 left-16"></div>

        {/* Content */}
        <Alarm fontSize="large" className="z-10 mb-1" />
        <h1 className="text-[50px] font-bold z-10">{averageEndTime}</h1>
        <p className="text-lg font-medium z-10">{t('wakeUpTime')}</p>
      </div>
    </div>
  );
}
