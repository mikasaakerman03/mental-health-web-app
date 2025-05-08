import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import api from '../../shared/helpers/axiosConfig';

export const JournalYearly = () => {
  const { t, i18n } = useTranslation();
  const [daysData, setDaysData] = useState([]);

  const months = {
    ru: [
      'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
      'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
    ],
    kk: [
      'Қаңтар', 'Ақпан', 'Наурыз', 'Сәуір', 'Мамыр', 'Маусым',
      'Шілде', 'Тамыз', 'Қыркүйек', 'Қазан', 'Қараша', 'Желтоқсан'
    ],
  };

  const [selectedMonth, setSelectedMonth] = useState(months[i18n.language]?.[4] || 'Май');

  const getDaysInMonth = (monthName) => {
    const year = new Date().getFullYear();
    const monthIndex = months[i18n.language]?.indexOf(monthName);
    if (monthIndex === -1 || monthIndex === undefined) return 31;
    return new Date(year, monthIndex + 1, 0).getDate();
  };

  const daysInMonth = getDaysInMonth(selectedMonth);

  const stats = Array.from({ length: daysInMonth }, (_, i) => {
    const dayNumber = i + 1;
    const dayData = daysData.find(d => d.day === dayNumber);
    if (!dayData) return 'skipped';

    switch (dayData.aiCategory) {
      case 1: return 'positive';
      case 2: return 'negative';
      case 0: return 'skipped';
      default: return 'skipped';
    }
  });

  const getColor = (status) => {
    switch (status) {
      case 'positive':
        return 'bg-[#A8C379]';
      case 'negative':
        return 'bg-[#F29142]';
      case 'skipped':
      default:
        return 'bg-[#E5DED8]';
    }
  };

  const weekDays = {
    ru: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    kk: ['Дс', 'Сс', 'Ср', 'Бс', 'Жм', 'Сн', 'Жс'],
  };

  useEffect(() => {
    const fetchDaysData = async () => {
      try {
        const year = new Date().getFullYear();
        const monthIndex = months[i18n.language]?.indexOf(selectedMonth) + 1 || 1;
        const response = await api.get(`/chat/journal/yearly-statistics?year=${year}&month=${monthIndex}`);
        setDaysData(response.data.days || []);
      } catch (error) {
        console.error('Ошибка загрузки данных за месяц:', error);
        setDaysData([]);
      }
    };

    fetchDaysData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedMonth, i18n.language]);

  return (
    <div className="bg-[#FAF7F4] p-4 rounded-2xl shadow-sm w-full flex flex-col">
      {/* Заголовок */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-[#4F3422]">{t('monthly_statistics')}</h2>
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          className="text-[#91AD75] text-sm font-semibold bg-transparent outline-none"
        >
          {months[i18n.language]?.map((month) => (
            <option key={month} value={month} className="text-[#4F3422]">
              {month}
            </option>
          ))}
        </select>
      </div>

      {/* Дни недели */}
      <div className="grid grid-cols-7 gap-2 mb-4">
        {weekDays[i18n.language]?.map((day, idx) => (
          <div key={idx} className="text-xs text-center text-[#4F3422] font-bold">{day}</div>
        ))}
      </div>

      {/* Кружочки */}
      <div className="grid grid-cols-7 gap-2">
        {stats.map((status, idx) => (
          <div
            key={idx}
            className={`w-6 h-6 rounded-full mx-auto ${getColor(status)}`}
          />
        ))}
      </div>

      {/* Легенда */}
      <div className="flex justify-around text-xs text-[#948B84] mt-4">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-[#E5DED8]" />
          {t('skipped')}
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-[#A8C379]" />
          {t('positive')}
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-[#F29142]" />
          {t('negative')}
        </div>
      </div>
    </div>
  );
};
