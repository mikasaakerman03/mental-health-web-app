import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import api from '../../shared/helpers/axiosConfig';

const meditationCategories = [
  { id: 1, titleRu: 'Осознанность', titleKk: 'Саналы болу', color: '#A0D8B3' },
  { id: 2, titleRu: 'Антистресс и расслабление', titleKk: 'Стрестен арылу және босаңсу', color: '#FFD6A5' },
  { id: 3, titleRu: 'Медитации для сна', titleKk: 'Ұйқыға арналған медитациялар', color: '#B5D0EB' },
  { id: 4, titleRu: 'Медитации для начинающих', titleKk: 'Бастапқы медитациялар', color: '#FDC5F5' },
  { id: 5, titleRu: 'Медитации на природе', titleKk: 'Табиғаттағы медитациялар', color: '#C5E1A5' },
];

export default function MeditationScoreList() {
  const { t, i18n } = useTranslation();
  const [stats, setStats] = useState(null);

  useEffect(() => {
    api.get('/chat/meditation/meditation-statistics')
      .then(res => setStats(res.data))
      .catch(err => console.error('Ошибка загрузки статистики:', err));
  }, []);

  // пока не загрузились — можно показать пустой список или спиннер
  if (!stats) {
    return <p>{t('loading')}</p>;
  }

  // собираем items
  const items = stats.categories.map(c => {
    const cat = meditationCategories.find(mc => mc.id === c.categoryId) || {};
    const hours = c.hours;
    // форматируем время с одной цифрой после запятой
    const time = `${hours} ${t('hours2')}`; // можно завести в i18n: "сағ."
    // считаем процент от totalHours, защищаясь от деления на 0
    const percent = stats.totalHours > 0
      ? `${Math.round((hours / stats.totalHours) * 100)}%`
      : '0%';

    const name = i18n.language === 'kk' ? cat.titleKk : cat.titleRu;

    return {
      name,
      time,
      percent,
      color: cat.color || '#ccc',
    };
  });

  return (
    <div className="w-full h-full flex flex-col justify-around gap-y-3">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between bg-white rounded-2xl p-4 shadow-sm"
        >
          {/* Левая часть: цветной кружок и название */}
          <div className="flex items-center gap-3">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <p className="text-[#4B3621] font-semibold">{item.name}</p>
          </div>

          {/* Правая часть: время и процент */}
          <div className="flex items-center gap-2">
            <p className="text-[#6B5B4A] text-sm font-semibold">{item.time}</p>
            <p className="text-[#4B3621] font-bold">{item.percent}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
