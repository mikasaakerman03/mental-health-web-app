import { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { useTranslation } from 'react-i18next';
import api from '../../shared/helpers/axiosConfig';

const data = [
  { name: 'Дем алу', value: 2.5 },
  { name: 'Визуализация', value: 1.7 },
  { name: 'Тыныс алу', value: 8 },
];

const COLORS = ['#A7B86D', '#E18732', '#F7DD8C', '#4B3621'];

export default function MeditationDonutChart() {
  const { t, i18n } = useTranslation();
  const [stats, setStats] = useState(null);

  const meditationCategories = [
    { id: 1, titleRu: 'Осознанность', titleKk: 'Саналы болу', color: '#A0D8B3' },
    { id: 2, titleRu: 'Антистресс и расслабление', titleKk: 'Стрестен арылу және босаңсу', color: '#FFD6A5' },
    { id: 3, titleRu: 'Медитации для сна', titleKk: 'Ұйқыға арналған медитациялар', color: '#B5D0EB' },
    { id: 4, titleRu: 'Медитации для начинающих', titleKk: 'Бастапқы медитациялар', color: '#FDC5F5' },
    { id: 5, titleRu: 'Медитации на природе', titleKk: 'Табиғаттағы медитациялар', color: '#C5E1A5' },
  ];

  useEffect(() => {
    api.get('/chat/meditation/meditation-statistics')
      .then(res => setStats(res.data))
      .catch(err => console.error(err));
  }, []);
  
  const chartData = stats
  ? stats.categories.map((c, idx) => {
      const cat = meditationCategories.find(mc => mc.id === c.categoryId) || {};
      return {
        name: i18n.language === 'kk' ? cat.titleKk : cat.titleRu,
        value: c.hours,
        color: COLORS[idx % COLORS.length]
      };
    })
  : [];

  return (
    <div className="relative w-60 h-60">
      {stats ? (
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              outerRadius="100%"
              innerRadius="70%"
              startAngle={90}
              endAngle={-270}
            >
              {chartData.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      ) : (
        <p>{t('loading')}</p>
      )}
  
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <p className="text-3xl font-bold text-[#4B3621]">
          {t('meditateHours', { hours: stats ? stats.totalHours : 0 })}
        </p>
        <p className="text-md text-[#4B3621] mt-1">{t('total')}</p>
      </div>
    </div>
  );
  
}
