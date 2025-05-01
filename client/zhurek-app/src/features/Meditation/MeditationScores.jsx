import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { useTranslation } from 'react-i18next';

const dataPie = [
  { name: 'Breathing', value: 2.5 },
  { name: 'Mindfulness', value: 1.7 },
  { name: 'Relax', value: 8 },
  { name: 'Sleep', value: 8 },
];

const COLORS = ['#A7C17A', '#F2A341', '#F8E07E', '#3F2E1E'];

export default function MeditationStats() {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 grid-rows-4 gap-4 h-full p-4">
      {/* Total Meditations Listened */}
      <div className="relative flex flex-col items-center justify-center bg-[#A7C17A] rounded-2xl overflow-hidden shadow-md">
        {/* Bubbles */}
        <div className="absolute w-48 h-48 bg-[#8FA35C] rounded-full opacity-20 -top-8 -left-8"></div>
        <div className="absolute w-24 h-24 bg-[#D9E6BF] rounded-full opacity-15 bottom-6 right-8"></div>

        {/* Content */}
        <h2 className="text-lg font-semibold text-[#3F2E1E] z-10">{t('totalMeditations')}</h2>
        <p className="text-4xl font-bold text-[#3F2E1E] mt-2 z-10">125</p>
      </div>

      {/* Total Hours */}
      <div className="relative flex flex-col items-center justify-center bg-[#F2A341] rounded-2xl overflow-hidden shadow-md">
        {/* Bubbles */}
        <div className="absolute w-48 h-48 bg-[#E08927] rounded-full opacity-20 -top-10 right-8"></div>
        <div className="absolute w-20 h-20 bg-[#FFD59B] rounded-full opacity-15 bottom-8 left-10"></div>

        {/* Content */}
        <h2 className="text-lg font-semibold text-[#3F2E1E] z-10">{t('totalHours')}</h2>
        <p className="text-4xl font-bold text-[#3F2E1E] mt-2 z-10">48</p>
      </div>

      {/* Meditation Types - Pie Chart */}
      <div className="relative flex flex-col items-center justify-center bg-[#F8E07E] rounded-2xl overflow-hidden shadow-md">
        {/* Bubbles */}
        <div className="absolute w-40 h-40 bg-[#E7CC5F] rounded-full opacity-20 -top-6 left-10"></div>
        <div className="absolute w-24 h-24 bg-[#FFF4C2] rounded-full opacity-15 top-24 right-4"></div>

        {/* Content */}
        <h2 className="text-lg font-semibold mt-5 text-[#3F2E1E] z-10">{t('meditationTypes')}</h2>
        <div className="w-40 h-40 mt-2 z-10">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={dataPie} dataKey="value" outerRadius="80%">
                {dataPie.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Meditation Score */}
      <div className="relative flex flex-col items-center justify-center bg-[#3F2E1E] rounded-2xl overflow-hidden shadow-md">
        {/* Bubbles */}
        <div className="absolute w-48 h-48 bg-[#6B5B4A] rounded-full opacity-20 -top-6 left-8"></div>
        <div className="absolute w-28 h-28 bg-[#AFA08F] rounded-full opacity-15 bottom-10 right-10"></div>

        {/* Content */}
        <h2 className="text-lg font-semibold text-white z-10">{t('meditationScore')}</h2>
        <p className="text-4xl font-bold text-white mt-2 z-10">87</p>
      </div>
    </div>
  );
}
