import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const JournalYearly = () => {
  const { t, i18n } = useTranslation();

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

  const stats = [
    'skipped', 'skipped', 'skipped', 'skipped', 'skipped', 'positive', 'positive',
    'positive', 'positive', 'skipped', 'negative', 'skipped', 'positive', 'positive',
    'skipped', 'skipped', 'skipped', 'skipped', 'skipped', 'skipped', 'skipped'
  ];

  const [selectedMonth, setSelectedMonth] = useState(months[i18n.language]?.[0] || 'Январь');

  const getColor = (status) => {
    switch (status) {
      case 'positive':
        return 'bg-[#A8C379]'; // Зеленый
      case 'negative':
        return 'bg-[#F29142]'; // Оранжевый
      case 'skipped':
      default:
        return 'bg-[#E5DED8]'; // Серый
    }
  };

  const weekDays = {
    ru: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    kk: ['Дс', 'Сс', 'Ср', 'Бс', 'Жм', 'Сн', 'Жс'],
  };

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
