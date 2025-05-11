import React, { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import api from '../../shared/helpers/axiosConfig';
import { musicData } from './Data'; // ваш список всех медитаций

const meditationCategories = [
  { id: 1, titleRu: 'Осознанность', titleKk: 'Саналы болу', color: '#A0D8B3' },
  { id: 2, titleRu: 'Антистресс и расслабление', titleKk: 'Стрестен арылу және босаңсу', color: '#FFD6A5' },
  { id: 3, titleRu: 'Медитации для сна', titleKk: 'Ұйқыға арналған медитациялар', color: '#B5D0EB' },
  { id: 4, titleRu: 'Медитации для начинающих', titleKk: 'Бастапқы медитациялар', color: '#FDC5F5' },
  { id: 5, titleRu: 'Медитации на природе', titleKk: 'Табиғаттағы медитациялар', color: '#C5E1A5' },
];


export default function MeditationRecommendations() {
  const { t, i18n } = useTranslation();
  const [aiSuggestion, setAiSuggestion] = useState(null);
  const audioRefs = useRef({});
  const [playingId, setPlayingId] = useState(null);

  useEffect(() => {
    const today = new Date();
    // в Казахстане сейчас GMT+6, но для формата YYYY-MM-DD берём UTC-строку
    const endDate = today.toISOString().slice(0, 10);
    const threeDaysAgo = new Date(today.getTime() - 3 * 24 * 60 * 60 * 1000);
    const startDate = threeDaysAgo.toISOString().slice(0, 10);
  
    api
      .get(`/chat/meditation/meditation-ai-suggestion?startDate=${startDate}&endDate=${endDate}`)
      .then(res => setAiSuggestion(res.data))
      .catch(err => console.error('Ошибка загрузки рекомендаций:', err));
  }, []);

  const togglePlay = meditationId => {
    const audio = audioRefs.current[meditationId];
    if (!audio) return;
    if (playingId === meditationId) {
      audio.pause();
      setPlayingId(null);
    } else {
      audioRefs.current[playingId]?.pause();
      audio.play();
      setPlayingId(meditationId);
    }
  };

  if (!aiSuggestion) {
    return <p className="p-4">{t('loading')}</p>;
  }

  // Собираем рекомендации из AI
  const recommendations = aiSuggestion.suggestions.map(s => {
    const meditation = musicData.find(m => m.id === s.meditationId) || {};
    const category = meditationCategories.find(c => c.id === aiSuggestion.categoryId) || {};
    return {
      meditationId: s.meditationId,
      title: meditation.title,
      subtitle: i18n.language==="ru"?category.titleRu : category.titleKk,
      audioSrc: meditation.path,
      icon: meditation.icon || '🎵',
      bgColor: category.color + '33', // полупрозрачный фон
    };
  });

  const summary = i18n.language === 'kk'
    ? aiSuggestion.summaryTextKk
    : aiSuggestion.summaryTextRu;

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-bold text-[#4F3422]">{t('meditationRecommendations')}</h2>
      <p className="text-gray-600">{summary}</p>

      <div className="flex flex-col gap-3">
        {recommendations.map((item) => (
          <div
            key={item.meditationId}
            className="flex items-center justify-between p-4 bg-white rounded-2xl shadow-sm cursor-pointer"
            onClick={() => togglePlay(item.meditationId)}
          >
            <audio
              ref={el => { if (el) audioRefs.current[item.meditationId] = el; }}
              src={item.audioSrc}
              preload="metadata"
            />

            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 flex items-center justify-center rounded-full ${item.bgColor}`}>
                <span className="text-2xl">{item.icon}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#4B3621] font-semibold">{item.title}</span>
                <span className="text-sm text-gray-500">{item.subtitle}</span>
              </div>
            </div>

            <div>
              {playingId === item.meditationId
                ? <span className="text-2xl text-[#4B3621]">⏸️</span>
                : <span className="text-2xl text-[#4B3621]">▶️</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
