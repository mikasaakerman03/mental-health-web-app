import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { subDays } from 'date-fns';

import { TimelineComponent } from './Timeline';

export const JournalDaily = () => {
  const { t } = useTranslation();
  return (
    <div className='w-full'>
      <h2 className="text-2xl font-bold text-[#4F3422] mb-5">{t('journalPage.myJournals')}</h2>
      <div className='w-full'>
        <DayCarousel />
      </div>
      <div className="w-full my-5">
        <TimelineComponent />
      </div>
    </div>
  )
}

export const DayCarousel = () => {
  const { i18n } = useTranslation();
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today);

  // Массивы локалей для дней недели
  const weekDays = {
    ru: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    kk: ['Дс', 'Сс', 'Ср', 'Бс', 'Жм', 'Сн', 'Жс'],
  };

  // Генерируем 15 дней: 7 до + сегодня + 7 после
  const days = Array.from({ length: 15 }, (_, i) => {
    const day = subDays(today, 7 - i);
    return {
      dayIndex: day.getDay(), // Индекс дня недели (0=Вс, 1=Пн и т.д.)
      date: day.getDate(),
      fullDate: day,
      status: Math.random() > 0.5 ? 'green' : 'gray',
    };
  });

  return (
    <div className="bg-[#4F3422] rounded-3xl p-2 flex w-full overflow-x-auto no-scrollbar">
      <div className="flex space-x-3">
        {days.map((dayItem) => (
          <div
            key={dayItem.fullDate.toISOString()}
            onClick={() => setSelectedDate(dayItem.fullDate)}
            className={`flex flex-col items-center justify-center w-14 h-20 rounded-3xl
            ${selectedDate.toDateString() === dayItem.fullDate.toDateString()
                ? 'bg-white text-[#4F3422]'
                : 'bg-[#6F5843] text-white'}
            cursor-pointer transition-all`}
          >
            <span className="text-xs">
              {weekDays[i18n.language]?.[dayItem.dayIndex] || ''}
            </span>
            <span className="text-lg font-bold">{dayItem.date}</span>

            {/* Маленькая точка */}
            <div
              className={`w-2 h-2 rounded-full mt-1 ${dayItem.status === 'green' ? 'bg-[#A8C379]' : 'bg-[#C4C4C4]'
                }`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};
