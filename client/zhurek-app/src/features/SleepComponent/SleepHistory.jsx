import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiMapPin } from 'react-icons/fi';
import { FaHeart, FaEye, FaExclamationTriangle } from 'react-icons/fa';
import { BsActivity } from 'react-icons/bs';
import { Select, MenuItem, FormControl } from '@mui/material';
import { format } from 'date-fns';
import { ru, kk } from 'date-fns/locale';

// Пример данных
const sleepData = [
  { date: '2025-01-05', hours: 4.2, type: 'Insomniac', color: '#B79DF2', icon: <BsActivity />, suggestion: 'No Suggestions' },
  { date: '2025-01-06', hours: 1.2, type: 'Core', color: '#4F3422', icon: <FaHeart />, suggestion: '8 Irregularity' },
  { date: '2025-01-07', hours: 2.2, type: 'REM', color: '#F9D77E', icon: <FaEye />, suggestion: 'No Suggestions' },
  { date: '2025-01-08', hours: 3.2, type: 'Irregular', color: '#F29142', icon: <FaExclamationTriangle />, suggestion: '8 AI Suggestions' },
  { date: '2025-01-09', hours: 5.0, type: 'Core', color: '#4F3422', icon: <FaHeart />, suggestion: 'No Suggestions' },
  { date: '2025-01-10', hours: 6.5, type: 'Normal', color: '#88b04b', icon: <FaEye />, suggestion: 'Good Sleep' },
  { date: '2025-01-11', hours: 7.5, type: 'Normal', color: '#88b04b', icon: <FaEye />, suggestion: 'Perfect' },
  { date: '2025-01-12', hours: 7.5, type: 'Normal', color: '#88b04b', icon: <FaEye />, suggestion: 'Perfect' },
];

const generateWeeks = (year) => {
  const weeks = [];
  let currentDate = new Date(year, 0, 1);

  // Сдвигаем на ближайший понедельник
  while (currentDate.getDay() !== 1) {
    currentDate.setDate(currentDate.getDate() + 1);
  }

  while (currentDate.getFullYear() === year) {
    const start = new Date(currentDate);
    const end = new Date(currentDate);
    end.setDate(start.getDate() + 6);

    // Устанавливаем конец дня
    end.setHours(23, 59, 59, 999);

    weeks.push({ start, end });

    currentDate.setDate(currentDate.getDate() + 7);
  }

  return weeks;
};
const localeMap = {
  ru,
  kk,
};

const formatDate = (date, language = 'kk', d = false) => {
  const formatString = d ? 'd MMM' : 'MMM';
  return format(new Date(date), formatString, {
    locale: localeMap[language] || undefined,
  });
};

export const SleepHistory = () => {
  const { t, i18n } = useTranslation();

  const [selectedWeekIndex, setSelectedWeekIndex] = useState('all');

  const weeks = generateWeeks(2025);

  const filteredData = sleepData.filter((item) => {
    if (selectedWeekIndex === 'all') return true;
    const week = weeks[Number(selectedWeekIndex)];
    const itemDate = new Date(item.date);
    return itemDate >= week.start && itemDate <= week.end;
  });

  return (
    <div className="w-full">
      <div className="flex items-start justify-between mb-5">
        <span className="text-[#4F3422] font-semibold text-2xl">{t('sleepTitle')}</span>

        <div className="">
          <FormControl size="small" sx={{ minWidth: 200 }}>
            <Select
              labelId="week-label"
              value={selectedWeekIndex}
              onChange={(e) => setSelectedWeekIndex(e.target.value)}
              sx={{ borderRadius: '12px', borderColor: '#fff', backgroundColor: "#fff" }}
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: 300,

                  },
                },
              }}
            >
              <MenuItem value="all">{t('allWeeks')}</MenuItem>
              {weeks.map((week, index) => (
                <MenuItem key={index} value={String(index)} sx={{
                  '&:hover': {
                    backgroundColor: '#FAF7F4',
                  },
                  '&.Mui-selected': {
                    backgroundColor: '#FAF7F4',
                  },
                  '&.Mui-selected:hover': {
                    backgroundColor: '#e9e1da',
                  },
                }}>
                  {formatDate(week.start, i18n.language, true)} – {formatDate(week.end, i18n.language, true)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>

      <div className="flex flex-col gap-4 w-full">
        {filteredData.length === 0 ? (
          <div className="text-center text-gray-400">{t('noData')}</div>
        ) : (
          filteredData.map((item, idx) => (
            <div key={idx} className="bg-white rounded-3xl px-4 py-3 flex items-center justify-between shadow-sm">
              <div className="bg-[#FAF7F4] flex flex-col items-center p-3 rounded-2xl">
                <span className="text-xs font-semibold text-[#C7BDB4]">
                  {formatDate(item.date, i18n.language, false)}
                </span>
                <span className="text-xl font-bold text-[#4F3422] leading-none">
                  {new Date(item.date).getDate()}
                </span>
              </div>

              <div className="flex-1 px-4">
                <div className="flex flex-row justify-between my-2">
                  <p className="text-[#4F3422] font-semibold text-sm mb-1">
                    {t('youSlept', { hours: item.hours })}
                  </p>
                  <div
                    className="flex items-center gap-1 text-white text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.icon}
                    {item.type.toUpperCase()}
                  </div>
                </div>
                <div className="w-full bg-[#ECE7E3] h-[6px] rounded-full">
                  <div
                    className="h-[6px] rounded-full"
                    style={{
                      width: `${(item.hours / 9) * 100}%`,
                      backgroundColor: item.color,
                    }}
                  />
                </div>
                <div className="text-[#948B84] text-xs mt-2 flex items-center gap-1">
                  <FiMapPin className="text-base" />
                  <span>{item.suggestion}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
