import React, { useState } from 'react';

export default function MeditationStepperModal({ onClose }) {
  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState('');
  const [minutes, setMinutes] = useState(25);
  const [sound, setSound] = useState('Chirping Birds');
  const [isPlaying, setIsPlaying] = useState(true);

  const goals = [
    'I want to gain more focus',
    'I want to sleep better',
    'I want to be a better person',
    'I want to conquer my trauma',
    'I want to enjoy life',
    'I want to be a leader',
  ];

  const sounds = ['Birds', 'Zen Garden', 'Mountain Stream', 'Himalayas'];

  const handleNext = () => {
    if (step < 4) setStep((prev) => prev + 1);
  };

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    } else {
      onClose?.();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center p-4 z-50">
      <div className="bg-white w-[600px] rounded-3xl p-6 relative">

        {/* ✖️ Кнопка закрытия */}
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 text-[#4B3621] text-2xl"
        >
          ✖️
        </button>

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={handleBack}
            className="text-[#4B3621] text-2xl"
          >
            ←
          </button>
          <h2 className="text-[#4B3621] font-bold text-lg">New Exercise</h2>
          <span className="text-[#BCAAA4] text-sm">{step} of 3</span>
        </div>

        {/* Step Content */}
        {step === 1 && (
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold text-[#4B3621] mb-4">
              What's your mindful exercise goal?
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {goals.map((g, idx) => (
                <button
                  key={idx}
                  onClick={() => setGoal(g)}
                  className={`flex flex-col justify-center items-center p-4 rounded-2xl ${goal === g ? 'bg-[#A7C17A] text-white' : 'bg-[#f9f6f3]'
                    }`}
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
              How much time do you have for exercise?
            </h3>
            <div className="bg-[#A7C17A] text-white text-5xl font-bold rounded-full px-12 py-6">
              {minutes}:00
            </div>
            <p className="text-[#4B3621]">Minutes</p>
            <button className="text-[#4B3621] text-sm bg-[#f9f6f3] px-4 py-2 rounded-full">
              🔊 Sound: {sound}
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="flex flex-col items-center gap-6">
            <h3 className="text-2xl font-bold text-[#4B3621]">
              Select Soundscapes
            </h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {sounds.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => setSound(s)}
                  className={`px-4 py-2 rounded-full border ${sound === s
                    ? 'bg-[#F2A341] text-white border-[#F2A341]'
                    : 'border-[#4B3621] text-[#4B3621]'
                    }`}
                >
                  {s}
                </button>
              ))}
            </div>
            <input
              type="text"
              placeholder="🔍 Search Soundscapes"
              className="w-full mt-4 border p-2 rounded-xl text-center bg-[#f9f6f3]"
            />
          </div>
        )}

        {step === 4 && (
          <div
            className="flex flex-col items-center justify-center bg-[#A7C17A] text-white p-10 rounded-3xl"
            style={{ height: '400px' }}
          >
            <button className="mb-4 bg-white text-[#4B3621] rounded-full px-4 py-2 text-sm">
              🔊 Sound: {sound}
            </button>

            <div className="text-3xl font-bold">Breathe In...</div>

            <div className="flex items-center justify-between w-full mt-10">
              <span>05:21</span>
              <div className="flex-1 mx-4 h-2 bg-white rounded-full overflow-hidden relative">
                <div className="absolute top-0 left-0 h-full bg-[#4B3621]" style={{ width: '30%' }}></div>
              </div>
              <span>25:00</span>
            </div>

            <div className="flex items-center justify-center gap-8 mt-8">
              <button className="text-3xl">⟲</button>
              <button
                onClick={togglePlay}
                className="w-16 h-16 bg-white text-[#4B3621] rounded-full flex items-center justify-center text-3xl"
              >
                {isPlaying ? '⏸️' : '▶️'}
              </button>
              <button className="text-3xl">⟳</button>
            </div>
          </div>
        )}

        {/* Continue Button */}
        {step < 4 && (
          <button
            onClick={handleNext}
            className="bg-[#4B3621] text-white font-semibold w-full py-3 rounded-full mt-8 flex items-center justify-center gap-2"
          >
            Continue →
          </button>
        )}
      </div>
    </div>
  );
}
