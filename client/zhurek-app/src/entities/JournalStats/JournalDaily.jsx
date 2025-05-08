import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { subDays, format } from 'date-fns';
import api from '../../shared/helpers/axiosConfig';
import { TimelineComponent } from './Timeline';
import { JournalSummary } from './JournalSummary';

export const JournalDaily = () => {
  const { t } = useTranslation();
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today);
  const [entries, setEntries] = useState([]);


  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const formattedDate = format(selectedDate, 'yyyy-MM-dd');
        const response = await api.get(`/chat/journal?date=${formattedDate}`);
        setEntries(response.data);
      } catch (error) {
        console.error('Ошибка загрузки записей:', error);
        setEntries([]);
      }
    };

    fetchEntries();
  }, [selectedDate]);
  return (
    <div className='w-full'>
      <h2 className="text-2xl font-bold text-[#4F3422] mb-5">{t('journalPage.myJournals')}</h2>
      <div className='w-full'>
        <DayCarousel selectedDate={selectedDate} setSelectedDate={setSelectedDate} entries={entries}/>
      </div>
      <JournalSummary selectedDate={selectedDate} />
      <div className="w-full my-5">
        <TimelineComponent selectedDate={selectedDate} setEntries={setEntries} entries={entries}/>
      </div>
    </div>
  )
}

export const DayCarousel = ({ selectedDate, setSelectedDate, entries }) => {
  const { i18n } = useTranslation();
  const today = new Date();

  const checkHasEntry = (fullDate) => {
    const formattedDay = format(fullDate, 'yyyy-MM-dd');
    return entries.some(entry => {
      const entryDate = format(new Date(entry.createdAt), 'yyyy-MM-dd');
      return entryDate === formattedDay;
    });
  };

  const weekDays = {
    ru: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    kk: ['Дс', 'Сс', 'Ср', 'Бс', 'Жм', 'Сн', 'Жс'],
  };

  const getMonthName = (date) => {
    const months = {
      ru: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
      kk: ['Қаң', 'Ақп', 'Нау', 'Сәу', 'Мам', 'Мау', 'Шіл', 'Там', 'Қыр', 'Қаз', 'Қар', 'Жел'],
    };
    const lang = i18n.language || 'ru'; // fallback на русский
    return months[lang]?.[date.getMonth()] || '';
  };

  const days = Array.from({ length: 15 }, (_, i) => {
    const day = subDays(today, 7 - i);
    return {
      dayIndex: day.getDay(),
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
            <span className="text-xs">{weekDays[i18n.language]?.[dayItem.dayIndex] || ''}</span>
            <span className="text-lg font-bold">{dayItem.date}</span>
            <span className="text-xs">{getMonthName(dayItem.fullDate)}</span>
            {/* Маленькая точка */}
            <div
              className={`w-2 h-2 rounded-full mt-1 ${checkHasEntry(dayItem.fullDate) ? 'bg-[#A8C379]' : 'bg-[#C4C4C4]'
                }`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

