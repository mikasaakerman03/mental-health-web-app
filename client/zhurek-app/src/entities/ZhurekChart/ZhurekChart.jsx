import React, { useState } from 'react';
import {
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  ReferenceLine,
  Area,
} from 'recharts';
import { useTranslation } from 'react-i18next';
import arrowRightIcon from '../../shared/assets/icons/arrowright_white.png';

const dataSets = {
  '1 Day': [
    { name: '00:00', value: 92 },
    { name: '06:00', value: 70 },
    { name: '12:00', value: 50 },
    { name: '18:00', value: 80 },
    { name: '24:00', value: 97 },
  ],
  '1 Week': [
    { name: 'Mon', value: 92 },
    { name: 'Tue', value: 70 },
    { name: 'Wed', value: 50 },
    { name: 'Thu', value: 80 },
    { name: 'Fri', value: 97 },
    { name: 'Sat', value: 55 },
    { name: 'Sun', value: 75 },
  ],
  '1 Month': [
    { name: 'Week 1', value: 60 },
    { name: 'Week 2', value: 75 },
    { name: 'Week 3', value: 50 },
    { name: 'Week 4', value: 85 },
  ],
  '1 Year': [
    { name: 'Jan', value: 70 },
    { name: 'Feb', value: 55 },
    { name: 'Mar', value: 80 },
    { name: 'Apr', value: 68 },
    { name: 'May', value: 95 },
    { name: 'Jun', value: 60 },
  ],
  'All Time': [
    { name: '2020', value: 50 },
    { name: '2021', value: 60 },
    { name: '2022', value: 75 },
    { name: '2023', value: 80 },
    { name: '2024', value: 97 },
  ],
};

const timeRanges = ['1 Day', '1 Week', '1 Month', '1 Year', 'All Time'];

export const ZhurekChart = () => {
  const [selected, setSelected] = useState('1 Week');
  const { t } = useTranslation();

  return (
    <div className="bg-[#f5f5f5] rounded-3xl p-6 w-full h-full shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-4xl font-bold text-[#4F3422]">97.245%</h2>
        <div className="flex items-center gap-2 bg-[#4F3422] text-white p-2 rounded-xl cursor-pointer font-semibold">
          {t('chart.title')} <img src={arrowRightIcon} alt="" />
        </div>
      </div>

      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={dataSets[selected]} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="gradientFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4F3422" stopOpacity={0.6} />
              <stop offset="100%" stopColor="#4F3422" stopOpacity={0} />
            </linearGradient>
          </defs>

          <XAxis
            dataKey="name"
            tick={{ fill: '#999', fontSize: 12 }}
            stroke="#ccc"
            tickLine={false}
            axisLine={false}
            tickFormatter={(name) => t(`chart.labels.${name}`)}
          />
          <YAxis
            domain={[40, 100]}
            ticks={[40, 50, 60, 70, 80, 90, 100]}
            tick={{ fill: '#999', fontSize: 12 }}
            stroke="#ccc"
            tickLine={false}
            axisLine={false}
            width={30}
            tickFormatter={(value) => `${value}`}
            interval={0}
            padding={{ top: 10, bottom: 10 }}
          />
          {[40, 50, 60, 70, 80, 90, 100].map((tick) => (
            <ReferenceLine
              key={tick}
              y={tick}
              stroke="#ccc"
              strokeDasharray="3 3"
              ifOverflow="extendDomain"
            />
          ))}

          <Tooltip
            contentStyle={{ backgroundColor: '#4F3422', color: '#fff', borderRadius: 8 }}
            labelStyle={{ color: '#fff' }}
            formatter={(value) => `${value}%`}
          />

          <Area
            type="monotone"
            dataKey="value"
            stroke="#4F3422"
            strokeWidth={3}
            fill="url(#gradientFill)"
            dot={{ stroke: '#4F3422', strokeWidth: 2, r: 5, fill: '#fff' }}
          >
            <LabelList dataKey="value" position="top" formatter={(val) => `${val}%`} fill="#4F3422" />
          </Area>
        </AreaChart>
      </ResponsiveContainer>

      <div className="flex justify-around mt-6 rounded-[1000px] bg-white py-2">
        {timeRanges.map((range) => (
          <button
            key={range}
            className={`text-sm px-4 py-2 rounded-full font-medium ${selected === range ? 'bg-[#4F3422] text-white' : 'text-[#4F3422] hover:bg-[#f2edea]'}`}
            onClick={() => setSelected(range)}
          >
            {t(`chart.ranges.${range}`)}
          </button>
        ))}
      </div>
    </div>
  );
};
