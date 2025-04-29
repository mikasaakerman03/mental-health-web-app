import React from 'react';

import useIsMobile from '../../shared/helpers/useIsMobile';
import clockIcon from '../../shared/assets/icons/clock_green.svg';
import { CurveProgress } from './CurveProgress';

export const MindfulHoursCard = () => {
  const isMobile = useIsMobile();

  return (
    <div className={`flex items-center justify-between bg-white ${isMobile ? 'p-3 rounded-xl' : 'p-4 rounded-2xl'} shadow-sm`}>
      {/* Левая часть */}
      <div className="flex items-center gap-3">
        <div className={`flex items-center justify-center ${isMobile ? 'w-10 h-10' : 'w-12 h-12'} bg-[#EDF2E1] rounded-xl`}>
          <img src={clockIcon} alt="Clock" className={isMobile ? 'w-5 h-5' : 'w-6 h-6'} />
        </div>
        <div>
          <div className={`${isMobile ? 'text-base' : 'text-lg'} font-bold text-[#5A3E2B] truncate`}>
            Mindful Hours
          </div>
          <div className="text-[#948B84] text-sm truncate">2.5h/8h Today</div>
        </div>
      </div>

      {/* Правая часть */}
      <div className="w-1/5">
        <CurveProgress value={6} total={10} />
      </div>
    </div>
  );
};
