import React, { useRef, useState, useEffect } from 'react';

import birdSounds from '../../shared/assets/meditations/bird_sounds.mp3';
import binauralBeats from '../../shared/assets/meditations/binaural_beats.mp3';
import './styles.css';

export default function MeditationHistory() {
  const history = [
    {
      title: 'Deep Meditation',
      category: 'Nature',
      categoryColor: '#A7C17A',
      audioSrc: birdSounds,
      totalTime: '25:00',
    },
    {
      title: 'Relaxed State',
      category: 'Chirping Bird',
      categoryColor: '#4B3621',
      audioSrc: binauralBeats,
      totalTime: '60:00',
    },
  ];

  const audioRefs = useRef([]);
  const [playingIndex, setPlayingIndex] = useState(null);
  const [progress, setProgress] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      audioRefs.current.forEach((audio, index) => {
        if (audio) {
          setProgress((prev) => ({
            ...prev,
            [index]: audio.currentTime / audio.duration,
          }));
        }
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

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
    <div className="flex flex-col gap-4 mt-7">
      <h2 className="text-[#4B3621] font-bold text-xl">Mindful Hour History</h2>

      <div className="bg-white p-4 flex flex-col gap-y-6 rounded-xl">
        {history.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-[#f9f6f3] p-4 rounded-2xl shadow-sm"
          >
            {/* Hidden audio */}
            <audio
              ref={(el) => (audioRefs.current[index] = el)}
              src={item.audioSrc}
              preload="metadata"
            ></audio>

            {/* Left part */}
            <div className="flex items-center gap-4 w-full">
              {/* Play button */}
              <button
                onClick={() => togglePlay(index)}
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center"
              >
                {playingIndex === index ? (
                  // Stop button
                  <div className="w-3.5 h-3.5 bg-[#4B3621]"></div>
                ) : (
                  // Play triangle
                  <div className="w-3 h-3 bg-[#4B3621] clip-triangle"></div>
                )}
              </button>

              {/* Main content */}
              <div className="flex flex-col w-full gap-2">
                <div className="flex items-center justify-between">
                  <p className="text-[#4B3621] font-semibold">{item.title}</p>
                  <span
                    className="text-white text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ backgroundColor: item.categoryColor }}
                  >
                    {item.category}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="relative w-full h-2 bg-[#e8e2de] rounded-full overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-[#4B3621] rounded-full"
                    style={{
                      width: `${(progress[index] || 0) * 100}%`,
                    }}
                  ></div>
                </div>

                {/* Times */}
                <div className="flex items-center justify-between text-xs text-gray-400 mt-1">
                  <span>
                    {audioRefs.current[index]
                      ? formatTime(audioRefs.current[index].currentTime)
                      : '00:00'}
                  </span>
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
