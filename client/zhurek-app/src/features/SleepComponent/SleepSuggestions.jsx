import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  GraphicEq,
  FavoriteBorder,
  Thermostat,
  Bed,
  Hotel,
  ArrowForwardIos
} from '@mui/icons-material';

export const SleepSuggestions = () => {
  const { t } = useTranslation();

  const items = [
    {
      title: "Қатты қорылдау",
      subtitle: "Қорылдауды бақылаңыз!",
      icon: <GraphicEq fontSize="small" />,
      bg: "bg-green-100 text-green-700",
    },
    {
      title: "Жастықты жақсарту",
      subtitle: "Жастықтарыңызды ауыстырыңыз",
      icon: <Hotel fontSize="small" />,
      bg: "bg-orange-100 text-orange-700",
    },
    {
      title: "Температураны реттеу",
      subtitle: "Бөлме температурасын жоғарылатыңыз",
      icon: <Thermostat fontSize="small" />,
      bg: "bg-purple-100 text-purple-700",
    },
    {
      title: "Ұйқының тұрақсыздығы",
      subtitle: "Сіздің ұйқыңыз тұрақсыз",
      icon: <Bed fontSize="small" />,
      bg: "bg-yellow-100 text-yellow-700",
    },
    {
      title: "Жүрек соғысының бұзылуы",
      subtitle: "Жүрек соғысының ауытқуы анықталды",
      icon: <FavoriteBorder fontSize="small" />,
      bg: "bg-gray-200 text-gray-700",
    },
  ];


  return (
    <div className="space-y-3 w-full mx-auto py-4">
      <div className="flex justify-between items-center">
        <h2 className="text-[#4F3422] font-semibold text-2xl">{t('aiSuggestions')}</h2>
      </div>

      {items.map((item, idx) => (
        <div
          key={idx}
          className="flex items-center justify-between bg-white rounded-2xl shadow px-4 py-3"
        >
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${item.bg}`}>
              {item.icon}
            </div>
            <div>
              <h3 className="font-semibold text-[#4e342e]">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.subtitle}</p>
            </div>
          </div>
          <ArrowForwardIos fontSize="small" className="text-[#4e342e]" />
        </div>
      ))}
    </div>
  );
}
