import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GraphicEq, FavoriteBorder, Thermostat, Bed, Hotel } from '@mui/icons-material';
import api from '../../shared/helpers/axiosConfig';

export const SleepSuggestions = () => {
  const { t } = useTranslation();
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const response = await api.get('/chat/sleep/ai-sleep-suggestion?recordId=70e4e077-0cd7-47c5-893e-7fb0718f2013');
        setRecommendations(response.data.recommendations || []);
      } catch (error) {
        console.error('Ошибка загрузки рекомендаций:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSuggestions();
  }, []);

  const iconAndBg = {
    1: { icon: <GraphicEq fontSize="small" />, bg: "bg-green-100 text-green-700" },
    2: { icon: <Hotel fontSize="small" />, bg: "bg-orange-100 text-orange-700" },
    3: { icon: <Thermostat fontSize="small" />, bg: "bg-purple-100 text-purple-700" },
    4: { icon: <Bed fontSize="small" />, bg: "bg-yellow-100 text-yellow-700" },
    5: { icon: <FavoriteBorder fontSize="small" />, bg: "bg-gray-200 text-gray-700" },
  };

  return (
    <div className="space-y-3 w-full mx-auto py-4">
      <div className="flex justify-between items-center">
        <h2 className="text-[#4F3422] font-semibold text-2xl">{t('aiSuggestions')}</h2>
      </div>

      {loading ? (
        <div className="space-y-3">
          {[...Array(3)].map((_, idx) => (
            <div
              key={idx}
              className="animate-pulse flex items-center justify-between bg-white rounded-2xl shadow px-4 py-3"
            >
              <div className="flex items-center gap-3 w-full">
                <div className="w-10 h-10 bg-gray-200 rounded-full" />
                <div className="flex flex-col w-full space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        recommendations.map((item) => {
          const iconInfo = iconAndBg[item.id] || {}; // fallback
          return (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white rounded-2xl shadow px-4 py-3"
            >
              <div className="flex items-center gap-3 w-full">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${iconInfo.bg}`}>
                  {iconInfo.icon}
                </div>
                <div className="w-full">
                  <h3 className="font-semibold text-[#4e342e]">{item.title}</h3>
                  <p className="text-md text-gray-500">{item.description}</p>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};
