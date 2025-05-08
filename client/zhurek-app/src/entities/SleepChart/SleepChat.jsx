import React from 'react';
import { BarChart, Bar, ResponsiveContainer } from 'recharts';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import arrowRightIcon from '../../shared/assets/icons/arrowright_green.svg';

const data = [
  { value: 30 },
  { value: 60 },
  { value: 100 },
  { value: 80 },
  { value: 50 },
  { value: 70 },
  { value: 40 },
];

export const SleepLevelCard = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="bg-[#A0B56F] rounded-[32px] p-4 w-full h-full flex flex-col justify-between text-white shadow-md">
      <div className="flex justify-between items-center">
        <span className="text-lg font-medium">{t('sleepLevel')}</span>
        <div className="text-xs font-bold tracking-widest">zzZ</div>
      </div>

      <div className="h-[100px] mt-2">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <Bar
              dataKey="value"
              radius={[10, 10, 10, 10]}
              barSize={20}
              fill="#F5F5EB"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-between items-center">
        <span className="text-3xl font-bold">8.2 {t('time')}</span>
        <div className="bg-white cursor-pointer rounded-full p-2">
          <img src={arrowRightIcon} alt="" aria-hidden onClick={()=>{navigate('/sleep')}}/>
        </div>
      </div>
    </div>
  );
};
