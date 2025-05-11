import React, { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { musicData } from './Data';
import './styles.css';
import api from '../../shared/helpers/axiosConfig';

export default function MeditationHistory() {
  const { t, i18n } = useTranslation();

  const meditationCategories = [
    { id: 1, titleRu: 'Осознанность', titleKk: 'Саналы болу', color: '#A0D8B3' },
    { id: 2, titleRu: 'Антистресс и расслабление', titleKk: 'Стрестен арылу және босаңсу', color: '#FFD6A5' },
    { id: 3, titleRu: 'Медитации для сна', titleKk: 'Ұйқыға арналған медитациялар', color: '#B5D0EB' },
    { id: 4, titleRu: 'Медитации для начинающих', titleKk: 'Бастапқы медитациялар', color: '#FDC5F5' },
    { id: 5, titleRu: 'Медитации на природе', titleKk: 'Табиғаттағы медитациялар', color: '#C5E1A5' },
  ];

  const audioRefs = useRef({});
  const [playingId, setPlayingId] = useState(null);
  const [progress, setProgress] = useState({});
  const [historyData, setHistoryData] = useState([]);
  const [currentTimeMap, setCurrentTimeMap] = useState({});

  const goalToCategoryId = {
    [t('category1')]: 1,
    [t('category2')]: 2,
    [t('category3')]: 3,
    [t('category4')]: 4,
    [t('category5')]: 5,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const newProgress = {};
      const newCurrentTime = {};
      Object.entries(audioRefs.current).forEach(([meditationId, audio]) => {
        if (audio && audio.duration > 0) {
          newProgress[meditationId] = audio.currentTime / audio.duration;
          newCurrentTime[meditationId] = audio.currentTime;
        }
      });
      setProgress(newProgress);
      setCurrentTimeMap(newCurrentTime);
    }, 500);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await api.get('/chat/meditation/meditation-history?page=0&size=5');
        setHistoryData(response.data.content);
      } catch (error) {
        console.error('Ошибка загрузки истории медитаций:', error);
      }
    };

    fetchHistory();
  }, []);


  const togglePlay = (meditationId, position) => {
    const audio = audioRefs.current[meditationId];
    if (!audio) return;

    const meditation = musicData.find(m => m.id === meditationId);
    const categoryId = meditation.categoryId;
    if (playingId === meditationId) {
      audio.pause();
      saveMeditationProgress({
        categoryId,      
        meditationId,
        position: Math.floor(audio.currentTime),
        finished: false,
      });
      setPlayingId(null);
       }   else {
      if (playingId !== null && audioRefs.current[playingId]) {
        audioRefs.current[playingId].pause();
      }
      if (position) {
        audio.currentTime = position;
      }
      audio.play();
      setPlayingId(meditationId);
    }
  };
    const history = historyData
    .map((h) => {
      const meditation = musicData.find((m) => m.id === h.meditationId);
      if (!meditation) return null;
      const category = meditationCategories.find(c => c.id === meditation.categoryId || c.id === h.categoryId);
      return {
        meditationId: h.meditationId,
        title: meditation.title,
        audioSrc: meditation.path,
        lang: meditation.language?.toUpperCase() || 'RU',
        category: i18n.language === 'kk' ? category?.titleKk : category?.titleRu,
        categoryColor: category?.color || '#ccc',
        position: h.position,
        totalDurationSeconds: (meditation.duration || 0) * 60,
        finished: h.finished,
        lastPlayedAt: h.lastPlayedAt,
        totalTime: formatTime((meditation.duration || 0) * 60),
      };
    })
    .filter(Boolean);

  return (
    <div className="flex flex-col gap-4 mt-7">
      <h2 className="text-[#4B3621] font-bold text-xl">{t('mindfulHourHistory')}</h2>

      <div className="bg-white p-4 flex flex-col gap-y-6 rounded-xl">
        {history.map((item) => (
          <div
            key={item.meditationId}
            className="flex items-center justify-between bg-[#f9f6f3] p-4 rounded-2xl shadow-sm"
          >
            {/* Hidden audio */}
            <audio
              ref={(el) => {
                if (el) {
                  audioRefs.current[item.meditationId] = el;
                  el.onended = () => {
                    setPlayingId(null);
                  };
                }
              }}
              src={item.audioSrc}
              preload="metadata"
            />

            {/* Left part */}
            <div className="flex items-center gap-4 w-full">
              {/* Play button */}
              <button
                onClick={() => togglePlay(item.meditationId, item.position)}
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center"
              >
                {playingId === item.meditationId ? (
                  <div className="w-3.5 h-3.5 bg-[#4B3621]"></div>
                ) : (
                  <div className="w-3 h-3 bg-[#4B3621] clip-triangle"></div>
                )}
              </button>

              {/* Main content */}
              <div className="flex flex-col w-full gap-2">
                <div className="flex items-center justify-between">
                  <p className="text-[#4B3621] font-semibold">{item.title}</p>
                  <div className="flex flex-row items-center gap-x-2">
                    <span
                      className="text-white text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ backgroundColor: item.categoryColor }}
                    >
                      {item.category}
                    </span>
                    <span
                      className="text-white text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ backgroundColor: item.lang === 'RU' ? '#f57c00' : '#e5e5e5' }}
                    >
                      {item.lang}
                    </span>
                  </div>
                </div>

                {/* Progress bar */}
                <div
                  className="relative w-full h-2 bg-[#e8e2de] rounded-full overflow-hidden cursor-pointer"
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const clickX = e.clientX - rect.left;
                    const width = rect.width;
                    const audio = audioRefs.current[item.meditationId];
                    if (audio) {
                      const newTime = (clickX / width) * audio.duration;
                      audio.currentTime = newTime;
                    }
                  }}
                >
                  <div
                    className="absolute top-0 left-0 h-full bg-[#4B3621] rounded-full progress-inner"
                    style={{
                      width: `${(progress[item.meditationId] || 0) * 100}%`,
                    }}
                  ></div>
                </div>

                {/* Times */}
                <div className="flex items-center justify-between text-xs text-gray-400 mt-1">
                <span>{formatTime(currentTimeMap[item.meditationId] || item.position)}</span>

                  <span>{item.totalTime}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Функция форматирования времени
function formatTime(seconds) {
  if (!seconds) return '00:00';
  const mins = Math.floor(seconds / 60)
    .toString()
    .padStart(2, '0');
  const secs = Math.floor(seconds % 60)
    .toString()
    .padStart(2, '0');
  return `${mins}:${secs}`;
}

async function saveMeditationProgress({ categoryId, meditationId, position, finished }) {
  try {
    const payload = {
      categoryId,
      meditationId,
      position,
      finished,
      lastPlayedAt: new Date().toISOString(),
    };

    const res = await api.post('chat/meditation/meditation-history', payload);
    console.log(res.data.message); // "Progress saved successfully"
  } catch (error) {
    console.error('Ошибка при сохранении истории медитации:', error);
  }
}
