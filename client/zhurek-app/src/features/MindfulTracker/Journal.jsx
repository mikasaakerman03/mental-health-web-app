import React from 'react';
import journalIcon from '../../shared/assets/icons/journal_orange.svg';

export const MindfulJournalCard = () => {
  const totalSquares = 20;
  const activeSquares = 8;

  const getSquareColor = (index) => {
    return index < activeSquares ? '#D9822B' : '#FDE7D4';
  };

  return (
    <div className="flex items-center justify-between p-3 bg-white rounded-2xl shadow-sm w-full">

      {/* Левая часть */}
      <div className="flex items-center gap-3">
        {/* Иконка */}
        <div className="w-10 h-10 bg-[#FDE7D4] rounded-xl flex items-center justify-center">
          <img src={journalIcon} alt="Journal Icon" className="w-5 h-5" />
        </div>

        {/* Тексты */}
        <div className="flex flex-col">
          <span className="text-[#5A3E2B] font-bold text-base">Mindful Journal</span>
          <span className="text-[#948B84] text-sm">64 Day Streak</span>
        </div>
      </div>

      {/* Правая часть — сетка */}
      <div className="grid grid-cols-5 gap-1 w-1/5">
        {Array.from({ length: totalSquares }).map((_, i) => (
          <div
            key={i}
            className="w-2.5 h-2.5 rounded-[4px]"
            style={{ backgroundColor: getSquareColor(i) }}
          />
        ))}
      </div>

    </div>
  );
};
