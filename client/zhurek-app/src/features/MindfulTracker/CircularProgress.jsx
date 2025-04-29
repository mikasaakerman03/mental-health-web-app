import React from 'react';

export const CircularProgress = ({ value, total }) => {
  const radius = 18; // радиус круга
  const circumference = 2 * Math.PI * radius;
  const progress = (value / total) * circumference;

  return (
    <div className="relative w-16 h-16 flex items-center justify-center">
      <svg className="w-full h-full" viewBox="0 0 44 44">
        {/* Фон круга */}
        <circle
          cx="22"
          cy="22"
          r={radius}
          stroke="#F3EFFD"  // Бледный фон
          strokeWidth="5"
          fill="none"
        />
        {/* Прогресс */}
        <circle
          cx="22"
          cy="22"
          r={radius}
          stroke="#C4B3F8"  // Сиреневый прогресс
          strokeWidth="5"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          strokeLinecap="round"
          transform="rotate(-90 22 22)"
        />
      </svg>

      {/* Число в центре */}
      <div className="absolute text-[#4F3422] font-bold text-base">
        {value}
      </div>
    </div>
  );
};
