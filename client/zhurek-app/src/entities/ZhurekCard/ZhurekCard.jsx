import React from 'react';

export const ZhurekCard = () => {
  return (
    <div className="bg-[#A8C379] rounded-[20px] p-4 w-full flex flex-col justify-between text-white shadow-md">
      <div className="flex w-full items-center gap-2 text-white font-semibold text-md">
        <span>❤️ {"  "}Zhurek Score</span>
      </div>

      <div className="flex flex-col items-center justify-center mt-4 mb-2">
        <div className="relative w-24 h-24">
          {/* Псевдокруг — потом можно заменить на настоящую прогресс-диаграмму */}
          <svg className="w-full h-full" viewBox="0 0 36 36">
            <path
              className="text-[#d7e5bf]"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="text-white"
              stroke="currentColor"
              strokeWidth="3"
              strokeDasharray="80, 100"
              fill="none"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold">80</span>
            <span className="text-sm">Healthy</span>
          </div>
        </div>
      </div>
    </div>
  );
};
