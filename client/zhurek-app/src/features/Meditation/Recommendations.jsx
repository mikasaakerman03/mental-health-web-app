import React, { useRef, useState } from 'react';
import birdSounds from '../../shared/assets/meditations/5/bird_sounds.mp3';
import binauralBeats from '../../shared/assets/meditations/5/binaural_beats.mp3';
import { useTranslation } from 'react-i18next';

export default function MeditationRecommendations() {
  const { t } = useTranslation();

  const recommendations = [
    {
      title: 'Расслабление',
      subtitle: 'Глубокое расслабление и отдых',
      audioSrc: birdSounds,
      icon: '🎵',
      bgColor: 'bg-green-100',
    },
    {
      title: 'Фокус',
      subtitle: 'Концентрация ума',
      audioSrc: binauralBeats,
      icon: '🧘‍♂️',
      bgColor: 'bg-purple-100',
    },
    {
      title: 'Сон',
      subtitle: 'Помощь в засыпании',
      audioSrc: binauralBeats,
      icon: '🌙',
      bgColor: 'bg-yellow-100',
    },
  ];

  const audioRefs = useRef([]);
  const [playingIndex, setPlayingIndex] = useState(null);

  const togglePlay = (index) => {
    if (playingIndex === index) {
      audioRefs.current[index].pause();
      setPlayingIndex(null);
    } else {
      if (playingIndex !== null) {
        audioRefs.current[playingIndex]?.pause();
      }
      audioRefs.current[index]?.play();
      setPlayingIndex(index);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="mb-2 text-xl font-bold text-[#4F3422]">{t('meditationRecommendations')}</h2>

      <div className="flex flex-col gap-3">
        {recommendations.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-white rounded-2xl shadow-sm cursor-pointer"
            onClick={() => togglePlay(index)}
          >
            <audio
              ref={(el) => (audioRefs.current[index] = el)}
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
              {playingIndex === index ? (
                <span className="text-2xl text-[#4B3621]">⏸️</span>
              ) : (
                <span className="text-2xl text-[#4B3621]">▶️</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
