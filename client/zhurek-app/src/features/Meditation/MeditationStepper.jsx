import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { musicData } from './Data';
import clsx from 'clsx';

export default function MeditationStepperModal({ onClose }) {
  const { t } = useTranslation();
  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState('');
  const [selectedMeditationId, setSelectedMeditationId] = useState(null);
  const [phase, setPhase] = useState('breatheIn');
  const [breathTimer, setBreathTimer] = useState(4);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [audioProgress, setAudioProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const goals = [
    t('category1'),
    t('category2'),
    t('category3'),
    t('category4'),
    t('category5'),
  ];

  const goalToCategoryId = {
    [t('category1')]: 1,
    [t('category2')]: 2,
    [t('category3')]: 3,
    [t('category4')]: 4,
    [t('category5')]: 5,
  };

  const handleNext = () => {
    if (step < 4) setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    } else {
      onClose?.();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setBreathTimer((prev) => {
        if (prev === 1) {
          setPhase((currentPhase) => {
            switch (currentPhase) {
              case 'breatheIn':
                return 'holdAfterIn';
              case 'holdAfterIn':
                return 'breatheOut';
              case 'breatheOut':
                return 'holdAfterOut';
              case 'holdAfterOut':
              default:
                return 'breatheIn';
            }
          });
          return 4;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center p-4 z-50">
      <div className="bg-white w-[600px] rounded-3xl p-6 relative">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={handleBack}
            className="text-[#4B3621] text-2xl"
          >
            ←
          </button>
          <h2 className="text-[#4B3621] font-bold text-lg">{t('newMeditationSession')}</h2>
          <div className="w-10">
            <button
              onClick={onClose}
              className="text-[#4B3621] text-2xl"
            >
              ✖️
            </button>
          </div>
        </div>

        {/* Step Content */}
        {step === 1 && (
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold text-center text-[#4B3621] mb-4">
              {t('selectGoal')}
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {goals.map((g, idx) => (
                <button
                  key={idx}
                  onClick={() => setGoal(g)}
                  className={`flex flex-col justify-center items-center p-4 rounded-2xl ${goal === g ? 'bg-[#A7C17A] text-white' : 'bg-[#f9f6f3]'}`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="flex flex-col items-center gap-6">
            <h3 className="text-2xl font-bold text-[#4B3621]">
              {t('selectMeditation')}
            </h3>

            <div className="flex flex-col gap-4 w-full">
              {musicData
                .filter((m) => m.categoryId === goalToCategoryId[goal])
                .map((m) => (
                  <label
                    key={m.id}
                    className={`flex items-center gap-3 p-3 rounded-2xl border cursor-pointer ${selectedMeditationId === m.id
                        ? 'bg-[#A7C17A] text-white border-[#A7C17A]'
                        : 'border-[#e8e2de] text-[#4B3621]'
                      }`}
                  >
                    <input
                      type="radio"
                      name="meditation"
                      value={m.id}
                      checked={selectedMeditationId === m.id}
                      onChange={() => setSelectedMeditationId(m.id)}
                      className="hidden"
                    />
                    <div className="w-4 h-4 rounded-full border-2 flex items-center justify-center">
                      {selectedMeditationId === m.id && (
                        <div className="w-2 h-2 bg-current rounded-full" />
                      )}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-semibold">{m.title}</span>
                      <span className="text-xs">{Math.round(m.duration)} {t('minutes')}</span>
                    </div>
                  </label>
                ))}
            </div>

            {selectedMeditationId && (
              <button
                onClick={handleNext}
                className="bg-[#4B3621] text-white font-semibold w-full py-3 rounded-full mt-8 flex items-center justify-center gap-2"
              >
                {t('continue')}
              </button>
            )}
          </div>
        )}

        {step === 3 && (
          <div
            className={clsx(
              "flex flex-col items-center justify-center text-white p-10 rounded-3xl",
              (phase === 'breatheOut' || phase === 'holdAfterIn' || phase === 'holdAfterOut') && 'bg-[#A7C17A]',
              phase === 'breatheIn' && 'bg-[#eaa403]'
            )}
            style={{  }}
          >
            <audio
              ref={audioRef}
              src={musicData.find(m => m.id === selectedMeditationId)?.path}
              preload="metadata"
              onTimeUpdate={() => {
                const audio = audioRef.current;
                if (audio) {
                  setCurrentTime(audio.currentTime);
                  setAudioProgress(audio.currentTime / audio.duration);
                }
              }}
              onEnded={() => setIsPlaying(false)}
            />

            <button className="mb-4 bg-white text-[#4B3621] rounded-full px-4 py-2 text-sm">
              🎵 {musicData.find(m => m.id === selectedMeditationId)?.title}
            </button>

            <div className="text-3xl font-bold mb-4">
              {phase === 'breatheIn' && t('breatheIn')}
              {phase === 'holdAfterIn' && t('hold')}
              {phase === 'breatheOut' && t('breatheOut')}
              {phase === 'holdAfterOut' && t('hold')}
            </div>

            <p className="text-xl">{breathTimer} с</p>

            <div className="flex items-center justify-between w-full mt-10">
              <span>{formatTime(currentTime)}</span>
              <div className="flex-1 mx-4 h-2 bg-white rounded-full overflow-hidden relative">
                <div
                  className="absolute top-0 left-0 h-full bg-[#4B3621] rounded-full transition-all duration-300"
                  style={{ width: `${audioProgress * 100}%` }}
                ></div>
              </div>
              <span>{formatTime(audioRef.current?.duration || 0)}</span>
            </div>

            <div className="flex items-center justify-center gap-8 mt-8">
              <button
                onClick={() => {
                  if (!audioRef.current) return;
                  if (isPlaying) {
                    audioRef.current.pause();
                  } else {
                    audioRef.current.play();
                  }
                  setIsPlaying(prev => !prev);
                }}
                className="w-16 h-16 bg-white text-[#4B3621] rounded-full flex items-center justify-center text-3xl"
              >
                {isPlaying ? '⏸️' : '▶️'}
              </button>
            </div>
            {/* Instruction Card */}
            <div className="bg-white text-[#4B3621] rounded-2xl p-4 text-center mt-6">
              <h4 className="font-bold text-lg mb-2">{t('breathingInstructionTitle')}</h4>
              <p className="text-sm">{t('breathingInstructionText')}</p>
            </div>

          </div>
        )}

        {/* Continue Button (кроме шага 2) */}
        {step < 3 && step !== 2 && (
          <button
            onClick={handleNext}
            className="bg-[#4B3621] text-white font-semibold w-full py-3 rounded-full mt-8 flex items-center justify-center gap-2"
          >
            {t('continue')}
          </button>
        )}
      </div>
    </div>
  );
}

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
