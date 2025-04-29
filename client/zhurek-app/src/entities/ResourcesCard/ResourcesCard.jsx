import React from 'react';
import { useNavigate } from 'react-router-dom';

import head from '../../shared/assets/images/head.svg';

export const ResourceCard = ({ title, category, views, likes, comments, link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (link) {
      navigate(link);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="flex flex-col p-4 bg-[#FAF7F4] rounded-2xl shadow-sm w-[220px] h-full justify-between cursor-pointer hover:shadow-md transition"
    >
      {/* Верх */}
      <div className="flex flex-col items-center gap-2">
        <img src={head} alt="Avatar" className="w-16 h-16 rounded-full" />

        {/* Категория */}
        <div className="bg-[#F3E8E3] text-[#5A3E2B] text-xs px-3 py-1 rounded-full font-semibold">
          {category}
        </div>

        {/* Заголовок */}
        <div className="text-center text-[#5A3E2B] text-sm font-bold leading-tight mt-1">
          {title}
        </div>
      </div>
    </div>
  );
};
