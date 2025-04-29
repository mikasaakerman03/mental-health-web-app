import React from 'react';

export const MoodCard = () => {
  return (
    <div className="bg-[#EA7D32] rounded-[20px] p-4 w-full flex flex-col justify-between text-white shadow-md">
      <div className="flex items-center gap-2 text-white font-semibold text-md">
        <span>☹️</span>
        <span>Mood</span>
      </div>

      <div className="flex flex-col items-center justify-center mt-4 mb-2">
        <span className="text-xl font-bold mb-2">Sad</span>
        {/* Простой график — можно заменить на Recharts или Chart.js */}
        <div className="flex items-end gap-1 h-20">
          {[2, 4, 8, 6, 10, 5, 3, 2, 1].map((height, idx) => (
            <div
              key={idx}
              className="bg-white rounded-full"
              style={{ width: '6px', height: `${height * 6}px` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
