import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { useTranslation } from 'react-i18next';

const data = [
  { name: 'Дем алу', value: 2.5 },
  { name: 'Визуализация', value: 1.7 },
  { name: 'Тыныс алу', value: 8 },
];

const COLORS = ['#A7B86D', '#E18732', '#F7DD8C', '#4B3621']; // подобраны ближе к оригиналу

export default function MeditationDonutChart() {
  const { t } = useTranslation();

  return (
    <div className="relative w-60 h-60">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            outerRadius="100%"
            innerRadius="70%"
            startAngle={90}
            endAngle={-270}
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      {/* Center Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <p className="text-3xl font-bold text-[#4B3621]">{t('meditateHours', {hours: 5.5})}</p>
        <p className="text-md text-[#4B3621] mt-1">{t('total')}</p>
      </div>
    </div>
  );
}
