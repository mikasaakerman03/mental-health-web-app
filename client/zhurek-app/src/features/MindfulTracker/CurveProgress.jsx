import React from 'react';

export const CurveProgress = ({ value, total }) => {
  const percentage = (value / total) * 100;

  return (
    <svg viewBox="0 0 120 50" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      {/* Серый фон путь */}
      <path
        d="M0 30 
           C10 5, 20 45, 30 25 
           S50 35, 60 20 
           S80 40, 90 15 
           S110 45, 120 30"
        stroke="#E5E5E5"
        strokeWidth="4"
        fill="none"
      />

      {/* Зелёный прогресс */}
      <path
        d="M0 30 
           C10 5, 20 45, 30 25 
           S50 35, 60 20 
           S80 40, 90 15 
           S110 45, 120 30"
        stroke="#A8C379"
        strokeWidth="4"
        fill="none"
        strokeDasharray="100"
        strokeDashoffset={100 - percentage}
        strokeLinecap="round"
      />
    </svg>
  );
};
