import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { useTranslation } from 'react-i18next';
import api from '../../shared/helpers/axiosConfig';

const COLORS = ['#A7C17A', '#F2A341', '#F8E07E', '#3F2E1E'];

export default function MeditationStats() {
  const { t, i18n } = useTranslation();
  const [stats, setStats] = useState(null);

  useEffect(() => {
    api.get('/chat/meditation/meditation-statistics')
      .then(res => setStats(res.data))
      .catch(err => console.error('Ошибка загрузки статистики:', err));
  }, []);

  if (!stats) {
    return <p className="p-4">{t('loading')}</p>;
  }
  const categoryCount = stats.categories.length;  
  // Подготовка данных для PieChart
  const dataPie = stats.categories.map((c, idx) => {
    // локализация названий категорий
    const names = {
      1: { ru: 'Осознанность', en: 'Breathing' },
      2: { ru: 'Антистресс и расслабление', en: 'Mindfulness' },
      3: { ru: 'Медитации для сна', en: 'Sleep' },
      4: { ru: 'Медитации для начинающих', en: 'Relax' },
      5: { ru: 'Медитации на природе', en: 'Nature' },
    };
    const nameKey = names[c.categoryId] || {};
    const name = i18n.language === 'ru' ? nameKey.ru : nameKey.en;
    return {
      name,
      value: c.hours,
    };
  });

  // Подсчёт процента для Score
  const score = stats.totalHours > 0
    ? Math.round((stats.totalMeditations / stats.totalHours) * 10) * 10
    : 0;

  return (
    <div className="grid grid-cols-1 grid-rows-4 gap-4 h-full p-4">
      {/* Всего прослушано медитаций */}
      <div className="relative flex flex-col items-center justify-center bg-[#A7C17A] rounded-2xl overflow-hidden shadow-md">
        <div className="absolute w-48 h-48 bg-[#8FA35C] rounded-full opacity-20 -top-8 -left-8"></div>
        <div className="absolute w-24 h-24 bg-[#D9E6BF] rounded-full opacity-15 bottom-6 right-8"></div>
        <h2 className="text-lg font-semibold text-[#3F2E1E] z-10">{t('totalMeditations')}</h2>
        <p className="text-4xl font-bold text-[#3F2E1E] mt-2 z-10">{categoryCount}</p>
      </div>

      {/* Всего часов */}
      <div className="relative flex flex-col items-center justify-center bg-[#F2A341] rounded-2xl overflow-hidden shadow-md">
        <div className="absolute w-48 h-48 bg-[#E08927] rounded-full opacity-20 -top-10 right-8"></div>
        <div className="absolute w-20 h-20 bg-[#FFD59B] rounded-full opacity-15 bottom-8 left-10"></div>
        <h2 className="text-lg font-semibold text-[#3F2E1E] z-10">{t('totalHours')}</h2>
        <p className="text-4xl font-bold text-[#3F2E1E] mt-2 z-10">{stats.totalHours}</p>
      </div>

      {/* Типы медитаций */}
      <div className="relative flex flex-col items-center justify-center bg-[#F8E07E] rounded-2xl overflow-hidden shadow-md">
        <div className="absolute w-40 h-40 bg-[#E7CC5F] rounded-full opacity-20 -top-6 left-10"></div>
        <div className="absolute w-24 h-24 bg-[#FFF4C2] rounded-full opacity-15 top-24 right-4"></div>
        <h2 className="text-lg font-semibold mt-5 text-[#3F2E1E] z-10">{t('meditationTypes')}</h2>
        <div className="w-40 h-40 mt-2 z-10">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={dataPie} dataKey="value" outerRadius="80%">
                {dataPie.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
