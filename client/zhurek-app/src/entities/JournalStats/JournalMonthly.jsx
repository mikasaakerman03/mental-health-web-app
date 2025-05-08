import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, CartesianGrid } from 'recharts';
import useIsMobile from '../../shared/helpers/useIsMobile';
import api from '../../shared/helpers/axiosConfig';

import skippedIcon from '../../shared/assets/icons/close_white.svg';
import negativeIcon from '../../shared/assets/icons/2emo_white.svg';
import positiveIcon from '../../shared/assets/icons/4emo_white.svg';

export const JournalMonthly = () => {
  const { t, i18n } = useTranslation();
  const isMobile = useIsMobile(); // добавили
  const [chartData, setChartData] = useState([
    { label: t('skipped'), value: 0, color: '#4F3422', icon: skippedIcon },
    { label: t('negative'), value: 0, color: '#F29142', icon: negativeIcon },
    { label: t('positive'), value: 0, color: '#A8C379', icon: positiveIcon },
  ]);

  const months = {
    ru: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    kk: ['Қаңтар', 'Ақпан', 'Наурыз', 'Сәуір', 'Мамыр', 'Маусым', 'Шілде', 'Тамыз', 'Қыркүйек', 'Қазан', 'Қараша', 'Желтоқсан'],
  };

  const [selectedMonth, setSelectedMonth] = useState(getCurrentMonth(i18n.language));

  useEffect(() => {
    const fetchMonthlyStatistics = async () => {
      try {
        const year = new Date().getFullYear();
        const monthIndex = months[i18n.language]?.indexOf(selectedMonth) + 1 || 1;
        const response = await api.get(`/chat/journal/yearly-statistics?year=${year}&month=${monthIndex}`);
        const days = response.data.days || [];

        let positive = 0;
        let negative = 0;
        let skipped = 0;

        days.forEach(day => {
          if (day.aiCategory === 1) positive++;
          else if (day.aiCategory === 2) negative++;
          else if (day.aiCategory === 0) skipped++;
        });

        setChartData([
          { label: t('skipped'), value: skipped, color: '#4F3422', icon: skippedIcon },
          { label: t('negative'), value: negative, color: '#F29142', icon: negativeIcon },
          { label: t('positive'), value: positive, color: '#A8C379', icon: positiveIcon },
        ]);
      } catch (error) {
        console.error('Ошибка загрузки месячной статистики:', error);
      }
    };

    fetchMonthlyStatistics();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedMonth, i18n.language]);

  return (
    <div className={`bg-[#FAF7F4] rounded-3xl p-4 ${isMobile ? 'gap-4' : 'p-6'} flex flex-col w-full`}>
      {/* Заголовок */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-bold text-[#4F3422]`}>
            {t('monthly_stat')}
          </h2>
          <p className="text-sm text-[#948B84]">{t('your_journal_stats_for')} {selectedMonth} 2025</p>
        </div>
        <div className="flex items-center gap-2">
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="bg-white border border-[#D6D3CE] rounded-lg text-sm p-1 text-[#4F3422]"
          >
            {months[i18n.language]?.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* График */}
      <div className="w-full">
        <ResponsiveContainer width="100%" height={isMobile ? 250 : 350}>
          <BarChart data={chartData} margin={{ top: 0, right: 0, left: isMobile ? -10 : -30, bottom: 0 }} barCategoryGap={isMobile ? "10%" : "20%"}>
            <CartesianGrid strokeDasharray="6 6" vertical={false} stroke="#E4E2E0" />
            <XAxis dataKey="label" padding={{ left: 0, right: 0 }} tick={false} axisLine={false} tickLine={false} />
            <YAxis hide />
            <Bar dataKey="value" barSize={isMobile ? 40 : 70} shape={(props) => <CustomBar {...props} data={chartData} />}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const CustomBar = ({ x, y, width, height, payload, data }) => {
  const current = data.find(item => item.label === payload.label);
  if (!current) return null;

  return (
    <g>
      <rect
        x={x}
        y={y}
        rx="30"
        ry="30"
        width={width}
        height={height}
        fill={current.color}
      />
      <text
        x={x + width / 2}
        y={y + 30}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="white"
        fontSize="16"
        fontWeight="bold"
      >
        {current.value}
      </text>
      <text
        x={x + width / 2}
        y={y + 50}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="white"
        fontSize="10"
      >
        {current.label}
      </text>
      <image
        x={x + width / 2 - 10}
        y={y + height - 30}
        width="20"
        height="20"
        href={current.icon}
      />
    </g>
  );
};

function getCurrentMonth(lang) {
  const months = {
    ru: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    kk: ['Қаңтар', 'Ақпан', 'Наурыз', 'Сәуір', 'Мамыр', 'Маусым', 'Шілде', 'Тамыз', 'Қыркүйек', 'Қазан', 'Қараша', 'Желтоқсан'],
  };
  const today = new Date();
  const monthIndex = today.getMonth();
  return months[lang]?.[monthIndex] || months['ru'][monthIndex];
}
